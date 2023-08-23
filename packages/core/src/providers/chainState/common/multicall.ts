import { Contract } from 'ethers'
import type { Provider } from 'ethers'
import { encodeAggregate, decodeAggregate } from '../../../abi/multicall'
import { RawCall } from './callsReducer'
import { ChainState } from './model'

const ABI = [
  'function aggregate(tuple(address target, bytes callData)[] calls) view returns (uint256 blockNumber, bytes[] returnData)',
  'function getLastBlockHash() public view returns (bytes32 blockHash)',
]

/**
 * @public
 */
export const multicall1Factory = (fastEncoding: boolean) => (fastEncoding ? fastEncodingMulticall : multicall)

/**
 * @public
 */
export async function multicall(
  provider: Provider,
  address: string,
  blockNumber: number,
  requests: RawCall[]
): Promise<ChainState> {
  if (requests.length === 0) {
    return {}
  }
  const contract = new Contract(address, ABI, provider)
  const [, results]: [BigInt, string[]] = await contract.aggregate(
    requests.map(({ address, data }) => [address, data]),
    { blockTag: blockNumber }
  )
  return decodeResult(results, requests)
}

/**
 * @public
 */
export async function fastEncodingMulticall(
  provider: Provider,
  address: string,
  blockNumber: number,
  requests: RawCall[]
): Promise<ChainState> {
  if (requests.length === 0) {
    return {}
  }
  const response = await provider.call({
    to: address,
    data: encodeAggregate(requests.map(({ address, data }) => [address, data])),
    blockTag: blockNumber,
  })
  const [, results] = decodeAggregate(response)
  return decodeResult(results, requests)
}

function decodeResult(results: string[], requests: RawCall[]) {
  const state: ChainState = {}
  for (let i = 0; i < requests.length; i++) {
    const { address, data } = requests[i]
    const result = results[i]
    const stateForAddress = state[address] ?? {}
    stateForAddress[data] = { value: result, success: true }
    state[address] = stateForAddress
  }
  return state
}

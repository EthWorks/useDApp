import { useMemo } from 'react'
import { ChainId } from '../constants'
import { useReadonlyNetworks } from '../providers/network'
import { useChainId } from './useChainId'
import type { Provider } from 'ethers'

export interface UseReadonlyProviderOptions {
  chainId?: number
}

export interface ReadonlyNetwork {
  provider: Provider
  chainId: number
}

/**
 * Gets a readonly provider for specific chainId.
 * @param opts.chainId Requested chainId. If not provided, the currently connected wallet's chainId will be used or the default one from the config.
 * @returns An ethers.js provider or undefined.
 * @public
 */
export function useReadonlyNetwork(opts: UseReadonlyProviderOptions = {}): ReadonlyNetwork | undefined {
  const chainId = useChainId({ queryParams: { chainId: opts.chainId } })
  const providers = useReadonlyNetworks()
  return useMemo(
    () =>
      providers[chainId as ChainId] !== undefined && chainId !== undefined
        ? {
            provider: providers[chainId as ChainId]!,
            chainId: chainId,
          }
        : undefined,
    [chainId, providers[chainId as ChainId]]
  )
}

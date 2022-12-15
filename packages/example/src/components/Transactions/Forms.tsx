import React from 'react'
import { utils, Contract, BigNumber } from 'ethers'
import { Mainnet, useContractFunction, useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'

import { TransactionForm } from './TransactionForm'

import { Weth10 } from '../../../gen/types/Weth10'
import WethAbi from '../../abi/Weth10.json'

const wethInterface = new utils.Interface(WethAbi.abi)
const wethContractAddresses = {
  [Mainnet.chainId]:'0xA243FEB70BaCF6cD77431269e68135cf470051b4'
}

export const DepositEth = () => {
  const { account, chainId } = useEthers()
  const etherBalance = useEtherBalance(account)
  const wethContractAddress = chainId ? wethContractAddresses[chainId] : undefined;

  const contract = wethContractAddress && new Contract(wethContractAddress, wethInterface) as Weth10

  const { state, send } = useContractFunction(contract, 'deposit', { transactionName: 'Wrap' })

  const depositEther = (etherAmount: string) => {
    void send({ value: utils.parseEther(etherAmount) })
  }

  return (
    <TransactionForm balance={etherBalance} send={depositEther} title="Wrap Ether" ticker="ETH" transaction={state} />
  )
}

export const WithdrawEth = () => {
  const { account, chainId } = useEthers()
  const wethContractAddress = chainId ? wethContractAddresses[chainId] : undefined;
  const wethBalance = wethContractAddress && useTokenBalance(wethContractAddress, account)
  const contract = wethContractAddress && new Contract(wethContractAddress, wethInterface) as Weth10
  const { state, send } = useContractFunction(contract, 'withdraw', { transactionName: 'Unwrap' })

  const withdrawEther = (wethAmount: string) => {
    void send(utils.parseEther(wethAmount))
  }

  return (
    <TransactionForm
      balance={BigNumber.from(wethBalance)}
      send={withdrawEther}
      title="Unwrap Ether"
      ticker="WETH"
      transaction={state}
    />
  )
}

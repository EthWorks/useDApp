import { ReactNode, useEffect, useState } from 'react'
import { JsonRpcProvider, Provider } from '@ethersproject/providers'
import { useConfig } from '../../config'
import { Providers } from './model'
import { ReadonlyNetworksContext } from './context'
import { NodeUrls } from '../../../constants'
import { fromEntries } from '../../../helpers/fromEntries'

interface NetworkProviderProps {
  providerOverrides?: Providers
  children?: ReactNode
}

export const getProvidersFromConfig = (readOnlyUrls: NodeUrls) =>
  fromEntries(
    Object.entries(readOnlyUrls).map(([chainId, urlOrProvider]) => {
      const rpcProvider = Provider.isProvider(urlOrProvider) ? urlOrProvider : new JsonRpcProvider(urlOrProvider)
      return [chainId, rpcProvider]
    })
  )

export function ReadonlyNetworksProvider({ providerOverrides = {}, children }: NetworkProviderProps) {
  const { readOnlyUrls = {} } = useConfig()
  const [providers, setProviders] = useState<Providers>(() => ({
    ...getProvidersFromConfig(readOnlyUrls),
    ...providerOverrides,
  }))

  useEffect(() => {
    setProviders({ ...getProvidersFromConfig(readOnlyUrls), ...providerOverrides })
  }, [JSON.stringify(readOnlyUrls)])

  return <ReadonlyNetworksContext.Provider value={providers}>{children}</ReadonlyNetworksContext.Provider>
}

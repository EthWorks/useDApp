import { EventEmitter } from 'events'
import { Connector, Update } from '../providers/network/connectors'

export function subscribeToProviderEvents(connector: Connector, onUpdate: (update: Partial<Update>) => void) {
  const provider: EventEmitter | undefined = (connector.provider as any).provider
  if (provider?.on) {
    const onConnectListener = (): void => {
      void connector.activate()
    }
    provider.on('connect', onConnectListener)

    const onDisconnectListener = (): void => {
      void connector.deactivate()
    }
    provider.on('disconnect', onDisconnectListener)

    const onChainChangedListener = (chainId: string): void => {
      onUpdate({ chainId: parseInt(chainId) })
    }
    provider.on('chainChanged', onChainChangedListener)

    const onAccountsChangedListener = (accounts: string[]): void => {
      onUpdate({ accounts })
    }
    provider.on('accountsChanged', onAccountsChangedListener)

    return () => {
      provider.removeListener('connect', onConnectListener)
      provider.removeListener('disconnect', onDisconnectListener)
      provider.removeListener('chainChanged', onChainChangedListener)
      provider.removeListener('accountsChanged', onAccountsChangedListener)
    }
  }

  return () => undefined
}

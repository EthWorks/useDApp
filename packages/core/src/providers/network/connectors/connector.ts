import { providers } from 'ethers'
import { Event, ReadOnlyEvent } from '../../../helpers/event'

export enum ConnectorPriority {
  ApiNode = 1,
  Wallet = 2,
}

export interface Update {
  chainId: number
  accounts: string[]
}

export interface Connector {
  name: string
  priority: ConnectorPriority

  provider?: providers.Web3Provider | providers.JsonRpcProvider

  getTag(): string

  update: ReadOnlyEvent<Update>

  connectEagerly(): Promise<void>

  activate(): Promise<void>

  deactivate(): Promise<void>
}

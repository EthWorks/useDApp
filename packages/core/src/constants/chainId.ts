// organize imports in alphabet order to sparse the conflict when adding a new chain
import {
  Localhost,
  Hardhat,
  Arbitrum,
  ArbitrumRinkeby,
  Avalanche,
  AvalancheTestnet,
  Aurora,
  AuroraTestnet,
  BSC,
  BSCTestnet,
  Cronos,
  CronosTestnet,
  Fantom,
  FantomTestnet,
  Harmony,
  Mainnet,
  Ropsten,
  Rinkeby,
  Gnosis,
  Goerli,
  Kovan,
  Andromeda,
  Stardust,
  Moonriver,
  MoonbaseAlpha,
  Moonbeam,
  Palm,
  PalmTestnet,
  Polygon,
  Mumbai,
  OasisEmerald,
  OasisEmeraldTestnet,
  Songbird,
  Theta,
  ThetaTestnet,
  ThunderCore,
  ThunderCoreTestnet,
  OptimismKovan,
  Optimism,
  Velas,
  VelasTestnet,
  ZkSyncTestnet,
} from '../model'

// rough alphabet order (put network from the same chain together)
export const DEFAULT_SUPPORTED_CHAINS = [
  Localhost,
  Hardhat,
  Avalanche,
  AvalancheTestnet,
  Arbitrum,
  ArbitrumRinkeby,
  Aurora,
  AuroraTestnet,
  Mainnet,
  Ropsten,
  Rinkeby,
  Goerli,
  Kovan,
  BSC,
  BSCTestnet,
  Cronos,
  CronosTestnet,
  Fantom,
  FantomTestnet,
  Gnosis,
  Harmony,
  Andromeda,
  Stardust,
  Moonriver,
  MoonbaseAlpha,
  Moonbeam,
  Palm,
  PalmTestnet,
  Polygon,
  Mumbai,
  OasisEmerald,
  OasisEmeraldTestnet,
  Songbird,
  Theta,
  ThetaTestnet,
  ThunderCore,
  ThunderCoreTestnet,
  OptimismKovan,
  Optimism,
  Velas,
  VelasTestnet,
  ZkSyncTestnet,
]

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  ThunderCoreTestnet = 18,
  Cronos = 25,
  CronosTestnet = 338,
  Kovan = 42,
  BSC = 56,
  BSCTestnet = 97,
  xDai = 100,
  Gnosis = 100,
  ThunderCore = 108,
  Polygon = 137,
  Theta = 361,
  ThetaTestnet = 365,
  Moonriver = 1285,
  Moonbeam = 1284,
  Mumbai = 80001,
  Harmony = 1666600000,
  Palm = 11297108109,
  PalmTestnet = 11297108099,
  Localhost = 1337,
  Hardhat = 31337,
  Fantom = 250,
  FantomTestnet = 4002,
  Avalanche = 43114,
  AvalancheTestnet = 43113,
  Songbird = 19,
  MoonbaseAlpha = 1287,
  OasisEmerald = 42262,
  OasisEmeraldTestnet = 42261,
  Stardust = 588,
  Andromeda = 1088,
  OptimismKovan = 69,
  Optimism = 10,
  Arbitrum = 42161,
  ArbitrumRinkeby = 421611,
  Aurora = 1313161554,
  AuroraTestnet = 1313161555,
  Velas = 106,
  VelasTestnet = 111,
  ZkSyncTestnet = 280,
  RedditTestnet = 5391184
}

import { Chain } from '../../constants';
export declare type NodeUrls = {
    [chainId: number]: string;
};
export declare type MulticallAddresses = {
    [chainId: number]: string;
};
export declare type FullConfig = {
    readOnlyChainId?: number;
    readOnlyUrls?: NodeUrls;
    multicallAddresses?: MulticallAddresses;
    multicallVersion: 1 | 2;
    supportedChains?: number[];
    networks?: Chain[];
    pollingInterval: number;
    notifications: {
        checkInterval: number;
        expirationPeriod: number;
    };
    localStorage: {
        transactionPath: string;
    };
    autoConnect: boolean;
};
export declare type Config = Partial<FullConfig>;
//# sourceMappingURL=Config.d.ts.map
"use strict";
exports.__esModule = true;
exports.useTokenBalance = void 0;
var constants_1 = require("../constants");
var useContractCall_1 = require("./useContractCall");
function useTokenBalance(tokenAddress, address, queryParams) {
    var _a;
    if (queryParams === void 0) { queryParams = {}; }
    var tokenBalance = ((_a = (0, useContractCall_1.useContractCall)(address &&
        tokenAddress && {
        abi: constants_1.ERC20Interface,
        address: tokenAddress,
        method: 'balanceOf',
        args: [address]
    }, queryParams)) !== null && _a !== void 0 ? _a : [])[0];
    return tokenBalance;
}
exports.useTokenBalance = useTokenBalance;
//# sourceMappingURL=useTokenBalance.js.map
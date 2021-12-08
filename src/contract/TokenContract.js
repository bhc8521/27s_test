import * as nearAPI from 'near-api-js';

export async function getMetadata(tokenId) {
    return await window.viewAccount.viewFunction(tokenId, "ft_metadata", {});
}

export async function getBalanceOf(tokenId, accountId) {
    return await window.viewAccount.viewFunction(tokenId, 'ft_balance_of', {account_id: accountId});
}

export async function getTotalSuply(tokenId) {
    return await window.viewAccount.viewFunction(tokenId, 'ft_total_suply', {});
}
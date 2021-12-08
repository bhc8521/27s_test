import * as nearAPI from 'near-api-js';

export default class LockupContract {
    contractHost = process.env.NODE_ENV === 'production' ? 'lockup-<account id>.facility.bhc8521.testnet' : 'lockup-<account id>.facility.27s.near';

    methods = {
        viewMethods: [
            'get_token_list', //获取creator已有的token
            'get_unclaimed_amounts',  //获取某个creator的token
        ],
        changeMethods: [
            'add_token',
            'add_task',
            'claim'
        ]  // 发布mint
    }

    getContractHost(accountId){
        let accountName = accountId.replace(/(.testnet|.near)/g, '');
        return process.env.NODE_ENV !== 'production' ? `lockup-${accountName}.facility.bhc8521.testnet` : `lockup-${accountName}.facility.27s.near`;
    }

    constructor(account, accountId){
        return new nearAPI.Contract(account, this.getContractHost(accountId), {...this.methods, sender: account});
    }
}
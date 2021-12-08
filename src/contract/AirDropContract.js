import * as nearAPI from 'near-api-js';

export default class AirDropContract {

    methods = {
        viewMethods: [
            'get_creator_token_list', //获取creator已有的token
            'get_token_storage_cost',
            'get_creator_tasks',  //批量获取空投状态
            'get_task_estimate_cost', //预估add_task所需deposit
            'get_creator_balance', //获取creator的token或者near的余额
        ],
        changeMethods: [
            'add_creator_token', // 当合约没有creator的token时调用此方法
            'deposit', //充值near到合约
            'add_task', //creator创建空投任务
            'claim' // user获取空投
        ]  // 发布mint
    }

    getContractHost(accountId){
        return process.env.NODE_ENV !== 'production' ? `linkdrop.bhc8521.testnet` : `linkdrop.27s.near`;
    }

    constructor(account, accountId){
        return new nearAPI.Contract(account, this.getContractHost(accountId), {...this.methods, sender: account});
    }
}
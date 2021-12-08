import * as nearAPI from 'near-api-js';

export default class MintContract {
    contractHost = process.env.NODE_ENV === 'production' ? 'token.27s.near' : 'token.bhc8521.testnet';

    methods = {
        viewMethods: [
            'get_tokens', // 获取所有mint过的合约
            'get_creator_tokens',  //获取某个creator的token
            'get_token_info', //获取某token的信息
            'get_token_code_info', //获取代码模板信息
            'get_token_code_types', //获取代码储存费用
            'get_token_storage_cost' // 获取所有token_types
        ],
        changeMethods: [
            'deploy_token'
        ]  // 发布mint
    }

    constructor(account){
        return new nearAPI.Contract(account, this.contractHost, {...this.methods, sender: account});
    }
}

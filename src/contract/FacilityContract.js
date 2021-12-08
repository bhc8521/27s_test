import * as nearAPI from 'near-api-js';

export default class FacilityContract {

    methods = {
        viewMethods: [
            'get_creator_facilities', //获取creator已有的token
            'get_facility_info',  //获取某个creator的token
            'get_facility_code_info', //获取代码模板信息
            'get_facility_storage_cost', //获取代码储存费用
            'get_facility_code_types' // 获取所有token_types
        ],
        changeMethods: [
            'deploy_facility'   //部署合约
        ]  // 发布mint
    }

    getContractHost(){
        return process.env.NODE_ENV !== 'production' ? `facility.bhc8521.testnet` : `facility.27s.near`;
    }

    constructor(account){
        return new nearAPI.Contract(account, this.getContractHost(), {...this.methods, sender: account});
    }
}
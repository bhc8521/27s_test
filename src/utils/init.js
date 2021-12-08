import axios from "../axios/index";
import * as nearAPI from 'near-api-js';
import getConfig from "../config";

// 判断 localStorage 是否有 "_wallet_auth_key"
function hasWalletKey() {
  let flag = false;
  for (let i = 0; i < localStorage.length; i++) {
  // 获取 localStorage 的所有 item
    let key = localStorage.key(i);
    if(~key.indexOf("_wallet_auth_key")) {
      flag = true;
      break;
    }
  }
  return flag;
}

async function initViewAccount(nearConfig) {
  const keyStore = new keyStores.InMemoryKeyStore();
  const PRIVATE_KEY = "by8kdJoJHu7uUkKfoaLd2J2Dp1q1TigeWMG123pHdu9UREqPcshCM223kWadm";
  const keyPair = KeyPair.fromString(PRIVATE_KEY);
  await keyStore.setKey("testnet", "example-account.testnet", keyPair);
  const near = await nearAPI.connect({
    // 创建near
    keyStore: keyStore,
    ...nearConfig,
  });
  window.viewAccount = await near.account("example-account.testnet");
  window.tokenContract = new MintContract()
}

export async function init() {
  const nearConfig = getConfig("development");
  await initViewAccount(nearConfig)
  const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
  const near = await nearAPI.connect({
    // 创建near
    keyStore: keyStore,
    ...nearConfig,
  });
  // 连接
  window.walletConnection = new nearAPI.WalletConnection(near);
  if (!hasWalletKey()) {
    // 跳转到near登录页
    await window.walletConnection.requestSignIn(nearConfig.contractName);
  } 

  // 获取账号id
  window.accountId = window.walletConnection.getAccountId();

  // 根据 id获取账号
  window.account = window.walletConnection.account(window.accountId);

  // 获取唯一标识，（通过这个标识获取签名）
  const keyPair = await keyStore.getKey(nearConfig.networkId, window.accountId);
  window.keyPair = keyPair;

  // const contract = new nearAPI.Contract(
  //   window.account, // the account object that is connecting
  //   "token.bhc8521.testnet",
  //   {
  //     // name of contract you're connecting to
  //     get_tokens: ["get_tokens"], // view methods do not change state but usually return a value
  //     get_creator_tokens: ["get_creator_tokens"], // change methods modify state
  //     sender: account, // account object to initialize and sign transactions.
  //   }
  // );

  // contract.get_creator_tokens({creator: 'xxxxx'});

  // contract.add_task();

  // 获取tokenlist
  // const tokenList = await contract.get_tokens();


  // 获取个人信息
  // let res = axios.home.get_my_profile();
  // console.log(res);
};
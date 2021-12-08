import axios from "axios";
import bs58 from "bs58";

// axios.defaults.baseURL = "";

axios.defaults.baseURL = "/api";

// 配置允许跨域
axios.defaults.crossDomain = true;
// 配置允许跨域携带cookie
axios.defaults.withCredentials = true;
// 配置超时时间
axios.defaults.timeout = 1e3 * 30;
// 配置请求Header

axios.defaults.headers["*"] = "Access-Control-Allow-Origin";
// axios.defaults.headers['Content-Type']='Access-Control-Allow-Headers;application/json;charset=utf-8;Access-Control-Allow-Origin;';
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8;";
// axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers["Authorization"] = "Access-Control-Allow-Headers";
axios.defaults.headers["Accept"] = "application/json;charset=utf-8;";
axios.defaults.headers["content-type"] = "application/json";

// axios request拦截 添加用户身份标识
// axios.interceptors.request.use(
//   (config) => {

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axios response拦截，统一处理响应错误
axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    console.log("[interceptors] - [response] - error", error);
    if (error.response) {
      let _status = String(error.response.status);
      if (["200", "304", "400"].includes(_status)) {
        return Promise.response(error.response);
      }
    }
    return Promise.reject(error);
  }
);

// 获取 sign
function getSign(method, param) {
  let data = {
    method_name: method, // method_name - 需要用的方法
    me: window.accountId,
    timestamp: new Date().getTime(),
    args: param,
  };
  const data_buffer = Buffer.from(JSON.stringify(data));

  // 获取签名
  const { signature } = window.keyPair.sign(data_buffer);
  // encode 转码
  let sign = bs58.encode(signature);

  return {
    data,
    signature: sign,
  };
}

export function get(method, data) {
  return axios.get(method, { params: getSign(method, data) });
}

export function post(method, data) {
  return axios.post(method, getSign(method, data));
}

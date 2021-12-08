import { generateSeedPhrase } from 'near-seed-phrase'
import js_sha256 from 'js-sha256';

export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = decodeURI(window.location.search.substr(1)).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

export function generatePhrase(entrophy) { 
  console.log({entrophy}); 
  let hash = js_sha256.sha256(entrophy)  
  return generateSeedPhrase(hash);
}

export function getTxArgs(result, method_name) {
  let index = result.transaction.actions.findIndex(action => action.FunctionCall.method_name == method_name)
  let args_string = result.transaction.actions[index].FunctionCall.args
  let args = JSON.parse(new Buffer(args_string, 'base64').toString())
  return args
}
import { post, get } from "../config";

export default {
  get_my_profile(data) {
    // 获取个人数据
    return post("get_my_profile", data);
  },
  get_user_profile(data) {
    // 获取个人数据
    return post("get_user_profile", data);
  },
  edit_user_profile(data) {
    // 修改个人数据
    return post("edit_user_profile", data);
  },
  get_my_posts(data) {
    // post 列表数据
    return post("get_my_posts", data);
  },
  get_user_posts(data) {
    return post("get_user_posts", data);
  },
  get_user_items(data) {
    // airdrop 列表数据
    return get("get_user_items", data);
  },
};

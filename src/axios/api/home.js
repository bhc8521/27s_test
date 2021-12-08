import { post, get } from "../config";

export default {
  get_recommend_posts(data) {
    return post("get_recommend_posts", data);
  },
  get_explore_posts(data) {
    return post("get_explore_posts", data);
  },
  get_explore_items(data) {
    return get("get_explore_items", data);
  },
  edit_user_profile(data) {
    return post("edit_user_profile", data);
  },
  get_my_profile(data) {
    return post("get_my_profile", data);
  },
};

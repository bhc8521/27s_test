import {post} from "../config";

export default {
  get_explore_posts(data) {
    return post("get_explore_posts", data);
  },
};

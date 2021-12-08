import {post} from "../config";

export default {
  new_post(data) {
    return post("new_post", data);
  },
};

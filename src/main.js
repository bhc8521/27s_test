import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";
import axios from "./axios/index";

import Loading from "@/assets/js/loading.js";
import Message from "@/assets/js/message.js";

import { Buffer } from "buffer";
window.Buffer = Buffer;

import {init} from "./utils/init";
init();




// axios.home.get_recommend_posts()
// axios.home.get_explore_posts({}, signature);
// console.log(axios)





let app = createApp(App);
app.config.globalProperties.$Loading = Loading;
app.config.globalProperties.$Message = Message;
app.config.globalProperties.$axios = axios;

app.use(store);
app.use(router);
app.mount("#app");

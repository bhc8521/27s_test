import Message from "@/components/message.vue";

import {createApp} from 'vue';

export default function(msg) {
  //1、实例化并绑定组件
  const plugin = createApp(Message, {msg});
  const instance = plugin.mount(document.createElement("div"));

  //2.将挂载的Node添加到body中
  document.body.appendChild(instance.$el);
};
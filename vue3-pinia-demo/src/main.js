

import { createApp } from 'vue'
import persist from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
const pinia = createPinia(); //创建pinia实例
//导入pinia持久化插件
pinia.use(persist)

import App from './App.vue'

createApp(App).use(pinia).mount('#app')

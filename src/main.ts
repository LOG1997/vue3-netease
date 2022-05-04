/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\main.ts
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-02 21:45:33
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-03 14:57:36
 */
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import "./assets/css/reset.css"
// iconfont
import "@/assets/iconfont/iconfont.css";
import IconFont from '@/assets/iconfont/iconfont.vue'
// element-plus
import 'element-plus/dist/index.css'
import router from "./router/index";
const app=createApp(App);
app.component('icon-font',IconFont);
app.use(router).mount('#app')

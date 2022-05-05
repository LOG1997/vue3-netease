/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\router\index.ts
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-02 21:45:33
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-06 00:35:22
 */
import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
// import Main from "../views/Main/Main.vue";
const routes = [
  

  // home路径重定向到根路径
  {
    
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "Main",
        component: () => import("../views/Main/Main.vue"),
      },
      {
        path: "playlist",
        name: "Playlist",
        component: () => import("../views/Playlist/Playlist.vue"),
      }
    ]
  },
  {
    path: "/",
    // redirect: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "Main",
        component: () => import("../views/Main/Main.vue"),
      },
      {
        path: "playlist",
        name: "Playlist",
        component: () => import("../views/Playlist/Playlist.vue"),
      }
    ]
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\router\index.ts
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-02 21:45:33
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-12 23:46:36
 */
import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import EveryDayRecommenMusic from "../views/EveryDayRecommenMusic/EveryDayRecommenMusic.vue";
// import Main from "../views/Main/Main.vue";
const routes = [
  

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
      }, 
       {
        path: "hotquility",
        name: "Hotquility",
        component: () => import("../views/Playlist/HighQualityPlaylist/HighQualityPlaylist.vue"),
      },   
      {
        path: "rank",
        name: "Rank",
        component: () => import("../views/Rank/Rank.vue"),
      },   {
        path: "singer",
        name: "Singer",
        component: () => import("../views/Singer/Singer.vue"),
      }, 
      {
        path: "musiclist",
        name: "musiclist",
        component: () => import("../views/Music/MusicList.vue"),
      },
      {
        path: "recom",
        name: "EveryDayRecommenMusic",
        component: EveryDayRecommenMusic ,
      }
    ]
  },
  {
    path: "/",
    redirect: "/home",
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

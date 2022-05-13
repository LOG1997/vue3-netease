/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\store\index.ts
 * @Descripttion:
 * @version:
 * @Date: 2022-05-09 15:28:40
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-14 00:54:33
 */
import { getPlayList } from "@/apis/request";
import { createStore } from "vuex";
import type { SONGDETAIL } from "@/types/type";
import userInfo from "./modules/userInfo";



export default createStore({
  state: {
    count: 0,
    song:JSON.parse(localStorage.getItem("song")) || "",
    playlist:JSON.parse(localStorage.getItem("playlist")) || "",
  },
  getters: {
    getSongDeatil(state) {
      // console.log("歌曲详情：", state.song);
      return state.song;
    },
    getPlayQueue(state) {
      // console.log("播放列表：", state.playlist);
      return state.playlist;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setSong(state, data) {
      // console.log("歌曲俩：", data);
      state.song = data;
      localStorage.setItem("song", JSON.stringify(data));
    },
    setPlayQueue(state, data) {
      // console.log("加入播放列表：", data);
      localStorage.setItem("playlist", JSON.stringify(data));
      state.playlist = data;
    },
  },
  actions: {},
  modules: {  
    userInfo: userInfo,
  },
});

/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\store\index.ts
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-09 15:28:40
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-10 17:27:00
 */
import { getPlayList } from '@/apis/request';
import { createStore } from 'vuex'
import type {SONGDETAIL} from '@/types/type'
export default createStore({
  state: {
    count: 0,
    song:{
        id: '',
        name: '',
        singer: '',
        album: '',
        url: '',
        cover: '',
    },
    playlist: [],
  },
  getters:{
    getSongDeatil(state){
        console.log("歌曲详情：",state.song);
        return state.song;
  },
  getPlayQueue(state){
    console.log("播放列表：",state.playlist);
    return state.playlist;
  }
  },
  mutations: {
    increment (state) {
        state.count++
      },
      setSong(state,data){
          console.log("歌曲俩：",data)
          state.song = data
      },
      setPlayQueue(state,data){
          console.log("加入播放列表：",data)
          state.playlist = data
      },
     
  },
  actions: {
  },
  modules: {
  }
})

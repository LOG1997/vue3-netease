/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\store\index.ts
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-09 15:28:40
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-10 00:05:21
 */
import { createStore } from 'vuex'

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
    }
  },
  getters:{
    getSongDeatil(state){
        console.log("歌曲详情：",state.song);
        return state;
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
     
  },
  actions: {
  },
  modules: {
  }
})

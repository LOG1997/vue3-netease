/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\store\modules\userInfo.ts
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-13 09:51:40
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-13 12:06:31
 */
import { createStore } from 'vuex'
const moduleA =createStore( {
  
    state: {
      username: '12'
    },
    getters: {
    //     getusername(state) {
    //     return state.username;
    //   }
    },
    mutations: {
        setusername(state,data){
            console.log("用户信息时：",data)
            state.username = data
        }
    },
    actions: {
    
    }
  })
  export default moduleA
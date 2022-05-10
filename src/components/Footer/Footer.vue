<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\Footer\Footer.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 13:48:51
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-10 00:13:00
-->
<script setup lang='ts'>
import { ref,reactive,watch } from 'vue';
import VueAudio from 'vue-audio-better'
 import store from "@/store";
 import {getSongUrl} from '@/apis/request';
 let song_url=ref('');
let songDetail= store.getters.getSongDeatil;
const playlist_queue=store.getters.getSongDeatil.song.play_queue;
const audio=ref(null)

// console.log("vuex歌曲详情",songDetail);
song_url.value=songDetail.song.url
||" http://m701.music.126.net/20220509233448/ea9e12631edaf9a883af1b662df5a1bf/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096429529/2bea/211b/0672/43be1ec076b8d7d7dc457549274e1d5f.mp3"

watch(songDetail, (newValue, oldValue) => {
    console.log('watch 已触发', newValue,oldValue);
    song_url.value=songDetail.song.url;
    setTimeout(()=>{
     audio.value.play();
    },0)
})

function playnext(){
    console.log("播放歌曲地址",song_url);
        console.log("播放队列",playlist_queue);
        let current_id=store.getters.getSongDeatil.song.id;
        let current_index=playlist_queue.indexOf(current_id);
    // if(audio.ended){
        getSongUrl({id:playlist_queue[current_index+1]}).then(res=>{
            console.log("新获取歌曲地址:",res);
          songDetail.song.id=res.data[0].id;
          songDetail.song.url=res.data[0].url;
          console.log("提交数据：",songDetail.song);
          store.commit("setSong",songDetail.song);
            song_url.value=res.data[0].url;
                setTimeout(()=>{
                audio.value.play();
    },0)
        })
    // }
}

</script>
 
<template>
<button  @click="playnext">打印</button>
<div class="playnusic">
    <div class="playnusic-img">
        <!-- <img :src="songDetail.cover" alt=""> -->
    </div>
<audio controls :src="song_url" ref="audio"></audio>
</div>
</template>
 
<style scoped>
 
</style>
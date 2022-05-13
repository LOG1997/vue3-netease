<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\Footer\Footer.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 13:48:51
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-14 00:59:28
-->
<script setup lang='ts'>
import { ref, reactive, watch, onMounted, computed } from 'vue';
import { useStore } from 'vuex' 
import { getSongUrl, getSongDetail } from '@/apis/request';
import { SONGDETAIL } from '@/types/type';
import store from "@/store";
// const store = useStore()
let songDetail = ref(computed(() => {
    return store.getters.getSongDeatil;
}))
// console.log("songDetail:+++++", songDetail);
const audio = ref(null);

// 监听vuex歌曲是否变化。变化则自动替换播放地址。
watch(songDetail, (newValue, oldValue) => {
    // console.log('watch 已触发', newValue, oldValue);
    // songDetail = newValue;
    setTimeout(() => {
        audio.value.play();
    }, 0)
}, { deep: true })
// 获取详细信息存入store,在点击下一首、上一首、自动播放下一首使用
async function SongDeatil(ids: string | number) {
    let song_id = ids;
    let name = '';
    let singer = '';
    let album = '';
    let url = '';
    let dt = '';
    let cover = '';
    await getSongDetail({ ids: ids }).then((res: any) => {
        // store.commit('setSongDeatil',res.data.songs[0]);
        // console.log("歌曲详细信息::::", res.songs);
        name = res.songs[0].name;
        singer = res.songs[0].ar.map((item: any) => item.name).join('/');
        album = res.songs[0].al.name;
        cover = res.songs[0].al.picUrl;
        dt = res.songs[0].dt;

    })
    await getSongUrl({ id: ids }).then((res: any) => {
        // console.log("歌曲的url::::", res.data[0]);
        url = res.data[0].url;
        // song_url.value = res.data.data[0].url;
    })
    let songdetail = {
        id: song_id,
        name: name,
        singer: singer,
        album: album,
        url: url,
        dt: dt,
        cover: cover
    }
    store.commit('setSong', songdetail);
    console.log("songdetail::::", songdetail);

}



// 下一曲
async function playnext() {
    // console.log("huoquldkakd::::",songDetail)
    
    let play_queue = store.getters.getPlayQueue;
    let current_id = songDetail.value.id;
    let current_index = play_queue.indexOf(current_id);
    let next_index = current_index + 1;
    // console.log("播放列表:", play_queue);
    // console.log("当前歌曲的index::::", play_queue[current_index]);
    // console.log("下一首歌曲的index::::", play_queue[next_index]);
    if(play_queue[next_index]==null){
        next_index=0;
    }
    SongDeatil(play_queue[next_index]);
}
// 播放/暂停
function playpause() {
    if (audio.value.paused) {
        audio.value.play();
    } else {
        audio.value.pause();
    }
}
// 上一曲
function playpre() {
    let play_queue = store.getters.getPlayQueue;
    let current_id = songDetail.value.id;
    let current_index = play_queue.indexOf(current_id);
    let pre_index = current_index - 1;
        if(play_queue[pre_index]==null){
        pre_index=play_queue.length-1;
    }
    SongDeatil(play_queue[pre_index]);
}
// 从localstorage中获取歌曲信息
let localSongs =JSON.parse(localStorage.getItem('song'))||[];
// console.log("localSongs::::", localSongs);
</script>
 
<template>
    <div class="playnusic flex">
        <div class="playnusic-img w-20">
            <img :src="songDetail.cover||localSongs.cover" alt="" class="w-20 h-20">
        </div>
        <div class="song-info text-left ml-10 w-60">
            <div class="song-name cursor-pointer">{{ songDetail.name||localSongs.name }}</div>
            <div class="song-singer cursor-pointer">{{ songDetail.singer||localSongs.singer }}</div>
        </div>
        <div class="audio-control flex flex-1 gap-10 justify-center">
            <button @click="playpre">上一首</button>
            <button @click="playpause">播放/暂停</button>
            <button @click="playnext">下一首</button>
        </div>
        
    </div>




    <div class="audio-container right-0">

        <audio controls :src="songDetail.url" ref="audio"></audio>
    </div>
</template>
 
<style scoped>
</style>
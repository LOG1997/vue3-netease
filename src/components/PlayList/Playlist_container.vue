<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\PlayList\Playlist_container.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-06 17:07:35
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-09 10:43:00
-->
<script setup lang='ts'>
import { ref,reactive,inject } from 'vue';
import { useRouter } from 'vue-router';
 const playlist=inject("playlist")
 
const router = useRouter();
 function routerToMusicList(data: any) {
    console.log("跳转到歌单详情", data);
    router.push(
        {
            path: "/home/musiclist",
            query: {
                playlistid: data
            }
        }
    )
}
</script>
 
<template>
<!-- <h2>lllll</h2> -->
    <div class="playlist-container">
        <ul class="flex gap-20 w-full flex-wrap justify-between">
             <li v-for="item in playlist" :key="item.id" class="w-60 m-0" @click="routerToMusicList(item.id)">
                <div class="personalized-item w-60 h-60 rounded-xl m-auto relative">
                       <div class="playlist-info w-20  h-5 absolute text-right text-light-100 text-sm pr-2 ml-40 bg-gray-400/50">
                        <p>◀️{{item.playCount}}</p>
                    </div>
                              <div class="playlist-info w-20 text-sm  h-5 absolute text-light-100 mt-55 bg-gray-400/50 text-left truncate">
                        <p>🐼{{item.creator.nickname}}</p>
                    </div>
                    <div class="playlist-img w-60 h-60">
                    <img :src="item.coverImgUrl" alt="" class="rounded-xl">
                       
                    </div>
                    
                    <div class="personalized-item-info">
                        <p>{{ item.name }}</p>
                    </div>
                 
                </div>
            </li>
        </ul>
    </div>
</template>
 
<style scoped>

</style>
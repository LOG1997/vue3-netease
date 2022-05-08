<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\PlayList\HighPlaylist_container.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-07 11:32:26
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-07 14:41:31
-->
<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Playlist\Playlist_container.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-06 17:07:35
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-07 10:48:28
-->
<script setup lang='ts'>
import { ref,reactive,inject } from 'vue';
const props=defineProps({
    allTopPlayList:Object}
);
 
 
</script>
 
<template>
    <div class="playlist-container">
        <ul class="flex gap-20 w-full flex-wrap justify-between">
             <li v-for="item in props.allTopPlayList" :key="item.id" class="w-1/4 m-0">
                <div class="personalized-item h-30 rounded-xl m-auto relative flex text-left">
                       <!-- <div class="playlist-info w-20  h-5 absolute text-right text-light-100 text-sm pr-2 ml-40 bg-gray-400/50">
                        <p>◀️{{item.playCount}}</p>
                    </div>
                              <div class="playlist-info w-20 text-sm  h-5 absolute text-light-100 mt-55 bg-gray-400/50 text-left truncate">
                        <p>🐼{{item.creator.nickname}}</p>
                    </div> -->
                    <div class="playlist-img w-30 h-30">
                    <img :src="item.coverImgUrl" alt="" class="rounded-xl">
                       
                    </div>
                    
                    <div class="personalized-item-info ml-5">
                        <p>{{ item.name }}</p>
                        <p>by{{item.creator.nickname}}</p>
                    </div>
                 
                </div>
            </li>
        </ul>
    </div>
</template>
 
<style scoped>
 .playlist-container{
     /* min-width: 100rem; */
 }
</style>
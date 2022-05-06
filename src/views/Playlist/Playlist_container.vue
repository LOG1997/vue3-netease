<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Playlist\Playlist_container.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-06 17:07:35
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-06 17:31:10
-->
<script setup lang='ts'>
import { ref,reactive,inject } from 'vue';
 const playlist=inject("playlist")
 
 
</script>
 
<template>
    <div class="playlist-container">
        <ul class="flex gap-25 w-full flex-wrap">
             <li v-for="item in playlist" :key="item.id">
                <div class="personalized-item w-40 h-40 rounded-xl m-auto relative">
                       <div class="playlist-info  w-full absolute text-right text-light-100 pr-2">
                        <p>◀️{{item.playCount}}</p>
                    </div>
                    <div class="playlist-img w-40 h-40">
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
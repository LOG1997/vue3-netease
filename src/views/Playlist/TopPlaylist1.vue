<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Playlist\TopPlaylist1.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-06 11:52:36
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-06 12:10:18
-->
<script setup lang='ts'>
import { ref,reactive,computed } from 'vue';
 const props=defineProps({
     topPlayList1:Object
 })
let topPlayList1=computed(()=>{
    return props.topPlayList1;
})
 
</script>
 
<template>
<div class="hot-playlist1 flex items-center h-full">
    <div class="hot-playlist-img w-30 h-30 ml-5">
        <img :src="topPlayList1.coverImgUrl" alt="">
    </div>
    <div class="hot-play-info w-100 ml-10 text-cool-gray-100">
        <p class="border-2 w-30 rounded-xl ">精品歌单</p>
        <p class="w-100 text-left">{{topPlayList1.name}}</p>
    </div>
</div>
</template>
 
<style scoped>
 
</style>
<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Playlist\PlaylistHead.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-06 12:15:00
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-06 16:56:28
-->
<script setup lang='ts'>
import { ref,reactive,inject } from 'vue';
 
 const hottags = inject("hottags")
 const transferCatTags=inject("transferCatTags")
//  点击获取新分类歌单
function selectPlaylistCat(cat:string){
    console.log("点击获取新分类歌单:",cat);
    transferCatTags(cat)
}

</script>
 
<template>
<div class="playlist-head w-auto h-10 flex justify-between leading-10">
    <div class="all-catlist">
        <p class="text-gray-500 border-1 leading-8 mt-1 ml-2 border-white">全部歌单</p>
    </div>
    <div class="hot-list-cat flex gap-3">
        <span v-for="item in hottags" :key="item.id" @click="selectPlaylistCat(item.name)">
        {{item.name}}</span>
    </div>
</div>
</template>
 
<style scoped>
 
</style>
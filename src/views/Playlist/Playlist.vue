<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Playlist\Playlist.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-05 23:26:00
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-06 00:17:27
-->
<script setup lang='ts'>
import { ref,reactive } from 'vue';
import {getTopPlayList} from '@/apis/request';
getTopPlayList({limit:1}).then((res:any)=>{
    console.log("精品歌单封面",res);
})
 
 
</script>
 
<template>
<h2>Play</h2>
</template>
 
<style scoped>
 
</style>
<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\MainHome\NewMusic\NewMusic.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-04 23:44:33
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-09 10:08:16
-->
<script setup lang='ts'>
import { ref,reactive,computed } from 'vue';
 
 const props=defineProps({
     newSong: {
         type: Object,
         default: []
     }
 })
 const newSong=computed(()=>{
    //  console.log("newsong",props.newSong)
     return props.newSong
 })
 
</script>
 
<template>
<div class="newsong-container h-50">
    <ul class="grid grid-cols-3 grid-rows-4  w-auto gap-10">
        <li v-for="item in newSong" :key="item.id" class="h-30 flex cursor-pointer hover:bg-gray-500/50">
        <div class="newsong-img h-30 w-40">
            <img :src="item.picUrl" alt="" class="w-30 h-30 min-h-30 min-w-30">
        </div>
        <div class="newSong-info h-30 pl-8 text-xl text-left">
            <div class="newsong-name h-15 leading-15 truncate w-70">
                <span>{{item.name}}</span>
            </div>
            <div class="newsong-singer h-15 leading-15">
                <span>{{item.song.artists[0].name}}</span>
            </div>
        </div>
        </li>
    </ul>
</div>
</template>
 
<style scoped>
 
</style>
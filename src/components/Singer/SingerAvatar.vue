<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\Singer\SingerAvatar.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-13 21:11:40
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-14 00:59:18
-->
<script setup lang='ts'>
import { ref,reactive,computed } from 'vue';
 const props=defineProps({
    singerInfo:Object
})
 const singerInfo=computed(()=>{
    return props.singerInfo
 })
 
</script>
 
<template>
<div class="singr-container flex" v-if="singerInfo">
    <div class="singer-img h-60 w-60 rounded-xl">
        <img :src="singerInfo.artist.cover" alt="" class="h-60 w-60 object-cover rounded-xl">
    </div>
    <div class="singer-info text-left ml-10">
        <h1>{{singerInfo.artist.name}}</h1>
        <p></p>
        <div class="singer-collection w-20 text-center cursor-pointer border-2 rounded-xl hover:bg-dark-50/20">
            <span>收藏</span>
        </div>
        <div class="singer-workscount leading-20 flex gap-10">
            <span>单曲：{{singerInfo.artist.musicSize}}</span>
            
            <span>专辑：{{singerInfo.artist.albumSize}}</span>
            
            <span>MV：{{singerInfo.artist.mvSize}}</span>
            
            
        </div>
    </div>
</div>
</template>
 
<style scoped>
 
</style>
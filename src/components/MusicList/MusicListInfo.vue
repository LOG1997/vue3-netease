<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\MusicList\MusicListInfo.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-08 10:44:09
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-12 23:36:56
-->
<script setup lang='ts'>
import { ref, reactive, computed } from 'vue';
let props = defineProps({
    musicListInfo: Object
})
const musicListInfo = computed(() => {
    console.log("歌单里的歌曲:", props.musicListInfo);
    return props.musicListInfo
})
// const creator= computed(() => {
//     console.log("歌单创建者:", props.musicListInfo.creator.nickname);
//     return props.musicListInfo.creator
// })



</script>
 
<template>
    <div class="music-list-info flex h-60 w-full" v-if="musicListInfo">
        <div class="music-list-info-img h-60 w-60">
            <img :src="musicListInfo.coverImgUrl" alt="" class="h-60 w-60">
        </div>
        <div class="music-list-info-info text-left ml-10 w-2/3">
            <div class="text-2xl">{{ musicListInfo.name }}</div>
            <div v-if="musicListInfo.creator">{{ musicListInfo.creator.nickname }}</div>
            <div><span>tags:</span><span v-for="item in musicListInfo.tags" class="mr-2"><a href="">{{ item
            }}</a></span>
            </div>
            <div class="playlistcount">
                <!-- <span>歌曲：</span>  <span class="mr-10">{{ musicListInfo.trackIds }}</span> -->
                <!-- <span>播放：</span> <span>{{musicListInfo.playCount}}</span> -->
            </div>
            <div class="description">
              <span>简介：</span>  <span class=""> {{ musicListInfo.description }}</span>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
.description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
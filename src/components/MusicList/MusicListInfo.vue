<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\MusicList\MusicListInfo.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-08 10:44:09
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-08 21:23:52
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
    <div class="music-list-info flex h-60" v-if="creator">
        <div class="music-list-info-img h-60">
            <img :src="musicListInfo.coverImgUrl" alt="" class="h-60">
        </div>
        <div class="music-list-info-info">
            <p class="text-2xl">{{ musicListInfo.name }}</p>
            <div>{{ musicListInfo.creator.nickname }}</div>
            <div><span>tags:</span><span v-for="item in musicListInfo.tags" class="mr-2"><a href="">{{ item }}</a></span>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
</style>
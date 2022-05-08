<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Playlist\HighQualityPlaylist\HighQualityPlaylist.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-07 08:56:04
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-07 15:22:25
-->
<script setup lang='ts'>
import { ref,reactive } from 'vue';
 import { getTopPlayList,getHighPlayListTags } from '@/apis/request';
 import HighPlaylist_container from '@/components/PlayList/HighPlaylist_container.vue';
let  allTopPlayList=ref([]);
let highTags=ref([]);
let isShowfilter=ref(false);
 // 获取全部精品歌单
getTopPlayList({limit:40}).then((res: any) => {
    console.log("全部精品歌单", res.playlists);
    allTopPlayList.value = res.playlists;
})
function getHighPlayList(data:string){
    getTopPlayList({limit:40,cat:data}).then((res: any) => {
    console.log(`${data}种类`, res.playlists);
    allTopPlayList.value = res.playlists;
            isShowfilter.value=!isShowfilter.value;
})
}
//  获取高质量歌单tags
function getHighTags(){
    getHighPlayListTags().then((res:any)=>{
            console.log("获取高质量歌单tags：",res)
            highTags.value=res.tags;
            isShowfilter.value=!isShowfilter.value;
        }
    )}
</script>
 
<template>
<div class="high-quality-playlist-head flex gap-20 justify-between mb-6">
    <div class="head-text">
        <h3>精品歌单</h3>
    </div>
    <div class="head-filter border-2 leading-10 border-gray-300 rounded-xl hover:bg-gray-300" @click="getHighTags">
        全部歌单
    </div>
<div class="HighTags w-200  bg-light-300 shadow-xl z-12 absolute right-10 top-6 text-center  divide-y" v-if="isShowfilter">
    <div class="tags-head leading-14 grid grid-cols-5">
        <p>全部歌单</p>
        </div>
        <ul class="grid grid-cols-5">
            <li v-for="item in highTags" :key="item.id" class="h-16" @click="getHighPlayList(item.name)">
            {{item.name}}</li>
        </ul>
</div>
</div>
<HighPlaylist_container :allTopPlayList="allTopPlayList"></HighPlaylist_container>

</template>
 
<style scoped>
 
</style>
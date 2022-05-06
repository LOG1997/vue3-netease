<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Playlist\Playlist.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-05 23:26:00
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-06 17:14:17
-->
<script setup lang='ts'>
import { ref, reactive, provide } from 'vue';
import { getTopPlayList, getPlayListHot,getPlayList } from '@/apis/request';
import TopPlaylist1 from './TopPlaylist1.vue';
import AllPaylist from './AllPlaylist.vue';
import { getPlayListCat } from '../../apis/request';
let topPlayList1 = ref([]);
let hottags = ref([]);
// 歌单页面
let playlist=ref([])
// 获取精品歌单
getTopPlayList({ limit: 1 }).then((res: any) => {
    console.log("精品歌单封面", res.playlists[0]);
    topPlayList1.value = res.playlists[0];
})
// 获取热门标签
 getPlayListHot().then((res:any)=>{
    hottags.value = res.tags;
    console.log("热门歌单分类",hottags);
 })
//  获得指定分类歌单
    getPlayList().then((res:any)=>{
        console.log("全部？",res);
        playlist.value=res.playlists;
    })

// 获得孙组件传上来的歌单分类；
function transferCatTags(cat:string){
    console.log("获得孙组件传上来的歌单分类:",cat);
        getPlayList({cat:cat}).then((res:any)=>{
        console.log("全部？",res);
        playlist.value=res.playlists;
    })
}
//  传给孙组件
provide(
    "hottags", hottags
)
provide(
    "transferCatTags", transferCatTags
)
provide(
    "playlist", playlist
)
</script>
 
<template>
    <div class="hot-playlist-one w-9/10 h-40 m-auto bg-dark-50">
        <TopPlaylist1 :topPlayList1="topPlayList1"></TopPlaylist1>
        <AllPaylist class="mt-2"></AllPaylist>
    </div>
</template>
 
<style scoped>
</style>
<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Singer\SingerDetail.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-13 21:11:07
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-14 00:35:03
-->
<script setup lang='ts'>
import { ref,reactive,computed,onMounted } from 'vue';
import {useRoute} from 'vue-router';
import {getArtistDetail,getArtistHotSongs,getArtistAlbum} from '@/apis/request';
import SingerAvatar from '@/components/Singer/SingerAvatar.vue';
import SingerSongs from '@/components/Singer/SingerSongs.vue';
const route=useRoute();
const singerId=ref({id:route.query.id});
let singerAlbumsInfo=singerId;
singerAlbumsInfo.value.limit=10;
singerAlbumsInfo.value.offset=0;
// console.log("新中国",singerAlbumsInfo.value);

let singerHotSongs=ref();
let singerAlbums=ref();
let singerDetail=ref()
console.log("歌手id：",singerId)
getArtistDetail(singerId.value).then((res:any)=>{
    singerDetail.value=res.data
    console.log("歌手详情：",singerDetail)
})
 getArtistHotSongs(singerId.value).then((res:any)=>{
     singerHotSongs.value=res.songs
    console.log("歌手热歌：",singerHotSongs)
})
getArtistAlbum(singerAlbumsInfo.value).then((res:any)=>{
    singerAlbums.value=res.hotAlbums
    console.log("歌手专辑：",singerAlbums)
})
</script>
 
<template>
<SingerAvatar :singerInfo="singerDetail" class="mt-10"></SingerAvatar>
<SingerSongs :singerHotSongs="singerHotSongs" :singerAlbums="singerAlbums"></SingerSongs>
</template>
 
<style scoped>
 
</style>
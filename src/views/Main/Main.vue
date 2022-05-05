<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Main\Main.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 20:22:03
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-05 22:03:43
-->
<script setup lang='ts'>
import { ref,reactive,onMounted } from 'vue';
 import HomeSwiper from "../../components/MainHome/HomeSwiper.vue";
 import { getBanner,getPersonalized,getNewSong } from '@/apis/request';
 import RecommendPlaylist from '@/components/RecommendPlaylist/RecommendPlaylist.vue';
 import NewMusic from '@/components/MainHome/NewMusic/NewMusic.vue';
 let banners=ref([])
 let personalized=ref([])
 let newSong=ref([])
 onMounted(()=>{
    //  获取轮播图
 getBanner().then((res:any) => {
     console.log("获取到的信息",res);
     banners.value=res;
 })
//  每日推荐歌单
 getPersonalized().then((res: any) => {
     console.log("推荐歌单",res);
     personalized.value=res.recommend;
 })
//  最新音乐
getNewSong().then((res: any) => {
    console.log("最新音乐",res);
    newSong.value=res.result;
})
 })

</script>
 
<template>
     <main class="mainhome">

        <div class="z-0 w-auto">
            <HomeSwiper :banners="banners"></HomeSwiper>
        </div>
        <div class="recommendPlaylist mt-10">
            <p class="text-left text-3xl ml-20">推荐歌单 ></p>
            <RecommendPlaylist :personalized="personalized"></RecommendPlaylist>
            
            <p class="text-left text-3xl ml-20">最新音乐 ></p>
    <NewMusic></NewMusic>
        </div>
        </main>
</template>
 
<style scoped>

</style>
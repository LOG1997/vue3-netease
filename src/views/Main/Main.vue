<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Main\Main.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 20:22:03
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-04 23:43:35
-->
<script setup lang='ts'>
import { ref,reactive,onMounted } from 'vue';
 import HomeSwiper from "../../components/MainHome/HomeSwiper.vue";
 import { getBanner,getPersonalized } from '@/apis/request';
 import RecommendPlaylist from '@/components/RecommendPlaylist/RecommendPlaylist.vue';
 let banners=ref([])
 let personalized=ref([])
 onMounted(()=>{
    //  获取轮播图
 getBanner().then((res:any) => {
     console.log("获取到的信息",res);
     banners.value=res;
 })
 getPersonalized().then((res: any) => {
     console.log("推荐歌单",res);
     personalized.value=res.recommend;
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
        </div>
        </main>
</template>
 
<style scoped>

</style>
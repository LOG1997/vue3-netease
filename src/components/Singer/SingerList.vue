<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\Singer\SingerList.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-08 09:04:04
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-08 09:38:33
-->
<script setup lang='ts'>
import { ref,reactive,computed } from 'vue';
 const props=defineProps({
    singerList:Object,
 })
 const artists=computed(()=>{
     console.log("传递给子组件歌手列表",props.singerList)
    return props.singerList;
    })
 
</script>
  
<template>
<!-- <h3>列表</h3> -->
<div class="singerList">
    <ul class="flex flex-wrap gap-x-10  justify-between">
        <li v-for="item in artists" :key="item.id" class="w-60 h-80">
        <div class="singer-img w-60 h-60 rounded-xl">
            <img :src="item.img1v1Url" alt="" class="w-60 h-60 rounded-xl">
        </div>
        <div class="singer-name flex justify-between mt-2">
            <span>{{item.name}}</span>
            <icon-font class="#icon-geren" v-if="item.accountId"></icon-font>
        </div></li>
    </ul>
</div>
</template>
 
<style scoped>
 
</style>
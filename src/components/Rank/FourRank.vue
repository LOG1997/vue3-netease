<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\Rank\FourRank.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-07 21:03:03
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-07 22:27:31
-->
<script setup lang='ts'>
import { ref, reactive,computed } from 'vue';

const props = defineProps(
    {
        officelRank: Object
    }
);
const tracks=computed(()=>{
    console.log("tracks:",props.officelRank);
    return props.officelRank;
});
</script>
 
<template>
<div class="fourRank-item w-full h-60 flex">
<div class="tracks-img h-60 w-60">
    <img :src="tracks.coverImgUrl" alt="">
</div>
<div class="tracks-list flex-1">
    <ul>
        <li v-for="(item,index) in tracks.tracks" :key="item.first" class="flex justify-between h-12">
            <div class="tracks-item-first">
        <span>{{index+1}}</span>
                {{item.first}}
            </div>
            <div class="tracks-item-second">
                {{item.second}}
            </div>
        </li>
    </ul>
</div>
<!-- <p>{{tracks}}</p> -->
</div>
</template>
 
<style scoped>
</style>
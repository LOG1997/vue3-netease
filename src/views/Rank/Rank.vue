<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Rank\Rank.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-07 15:22:53
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-08 10:36:04
-->
<script setup lang='ts'>
import { ref,reactive ,onMounted} from 'vue';
import FourRank from '@/components/Rank/FourRank.vue';
 import {getRankListSymple} from '@/apis/request';
 let rankListID = ref([]);
 let rankFour = ref([]);

//  getRankListID().then((res:any)=>{
//         console.log("榜单id：",res.list);
//         rankListID.value = res.list;
//     });
    getRankListSymple().then((res:any)=>{
        rankFour.value = res.list.slice(0,4);
        console.log("榜单简略信息：",rankFour.value);
    });


</script>
<template>
<h3>官方榜</h3>
<div class="fourRank-item m-auto pb-10"  v-for="(item,index) in rankFour" :key="index">
<FourRank :officelRank="item" class="w-4/5 min-w-1/4"></FourRank>
</div>
</template>
 
<style scoped>
 .fourRank-item{
     /* width: 80rem; */
     min-width: 30rem;
 }
</style>
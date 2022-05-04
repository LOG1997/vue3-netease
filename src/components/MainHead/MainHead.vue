<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\MainHead\MainHead.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 18:13:25
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-03 18:17:45
-->
<script setup lang='ts'>
import { ref,reactive } from 'vue';
import navdata from "../../navdata/nav.json"
console.log(navdata);
 
</script>
 
<template>
<div class="main-head">
    <ul class="flex">
        <li class="w-40 text-2xl text-left text-dark-400/60 hover:text-dark-600 cursor-pointer" v-for="item in navdata.headnav" :key="item.id">
        {{item.name}}</li>
    </ul>
</div>
</template>
 
<style scoped>
 
</style>
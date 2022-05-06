<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\LeftNav\LeftNav.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 16:37:15
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-06 12:16:27
-->
<script setup lang='ts'>
import { ref, reactive } from 'vue';

import staticdata from "../../staticdata/nav.json"
console.log(staticdata);
</script>
 
<template>
    <div class="left-nav">
        <div class="nav-home">
            <ul>
                <li class=" h-10  text-left leading-10 hover:bg-dark-50/20 cursor-pointer"
                    v-for="item in staticdata.nav" :key="item.id">
                    <span class="ml-5">{{ item.name }}</span>
                </li>
            </ul>
        </div>
        <div class="mymusic">
            <div class="mymusic-title text-left text-gray-500 ml-3 h-10 leading-10">
                <span>我的音乐</span>
            </div>
            <ul>
                <li class=" h-10 text-left  leading-10 hover:bg-dark-50/20 cursor-pointer"
                    v-for="item in staticdata.mymusic" :key="item.id">

                    <span class="ml-5">{{ item.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
 
<style scoped>
</style>
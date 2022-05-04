<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\RecommendPlaylist\RecommendPlaylist.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 20:26:01
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-04 23:16:14
-->
<script setup lang='ts'>
import { ref, reactive, computed } from 'vue';
const props = defineProps({
    personalized: Object
})
const personalized = computed(() => {
    return props.personalized
})

console.log("个人歌单：", personalized)
</script>
 
<template>
    <div class="recommend-list h-50">
        <ul class="grid grid-cols-5 grid-rows-[15rem,15rem] row-span-1 justify-center">
            <li>
                <div class="daily-playlist w-40 h-40 m-auto ">
                    <div class="daily-playlist h-40 w-40 bg-dark-50 rounded-xl">
                    </div>
                           <div class="personalized-item-info">
                    <p>每日歌曲推荐</p>
                </div>
                </div>
            </li>
            <li v-for="item in personalized" :key="item.id">
                <div class="personalized-item w-40 h-40 rounded-xl m-auto">
                    <img :src="item.picUrl" alt="" class="rounded-xl">
                    <div class="personalized-item-info">
                        <p>{{ item.name }}</p>

                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
 
<style scoped>
li {
    cursor: pointer;
    height: 15rem
}
</style>
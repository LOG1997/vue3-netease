<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Singer\Singer.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-07 22:32:35
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-08 09:59:51
-->
<script setup lang='ts'>
import { ref, reactive,onMounted } from 'vue';
import { getArtistList } from '@/apis/request';
import SingerCat from '@/components/Singer/SingerCat.vue';

import SingerList from '@/components/Singer/SingerList.vue';
// 获取歌手列表

let sendArg = ref({ type: "-1", area: "-1", initial: "-1",limit:"40" });
let singerList=ref([]);

onMounted(() => {
    getArtistList(sendArg.value).then((res: any) => {
    singerList.value = res.artists;
    console.log("歌手列表", singerList);
})
})

function changeArg(data: any) {
    console.log("原有参数", sendArg)
    sendArg = data;
    console.log("更新参数", sendArg);
    getArtistList(sendArg).then((res: any) => {
    singerList.value = res.artists;
    console.log("更新歌手列表", singerList)
})
}

</script>
 
<template>
    <div class="singerCat ml-10 mt-5 w-9/10">

        <SingerCat @changeArg="changeArg" :sendArg="sendArg"></SingerCat>
        <SingerList :singerList="singerList"></SingerList>
    </div>
</template>
 
<style scoped>
</style>
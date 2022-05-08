<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\MusicList\MusicLsitDetail.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-08 22:24:21
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-08 23:54:06
-->
<script setup lang='ts'>
import { ref, reactive, computed, onMounted } from 'vue';
import { ElTable } from 'element-plus';
let props = defineProps({
    musicListInfo: Object
})

const musicListInfo = computed(() => {
    console.log("歌单里的歌曲:", props.musicListInfo);


    return props.musicListInfo;
})
let dt = ref(null);
console.log("dt:", dt);

</script>
 
<template>
    <div class="music-list-item">
        <el-table :data="musicListInfo" stripe="" style="width: 100%" >
            <el-table-column type="index" label="" width="60" />
            <el-table-column label="操作" width="100">
                <div class="option-music flex cursor-pointer">
                    <icon-font class="#icon-xihuan" fontSize="2rem"></icon-font>
                    <icon-font class="#icon-24px" fontSize="2rem"></icon-font>
                </div>
            </el-table-column>
            <el-table-column prop="name" label="歌名" width="300" :show-overflow-tooltip="true"/>
            <el-table-column prop="ar" label="歌手" width="300" :show-overflow-tooltip="true">
                <template #default="scope">
                    <span v-for="item in scope.row.ar" :key="item.id">{{ item.name }}</span>
                </template>
            </el-table-column>

            <el-table-column prop="al.name" label="专辑" width="300" :show-overflow-tooltip="true"  />
            <el-table-column prop="dt" label="时间">
                <template #default="scope">
                    <span>{{Math.floor(scope.row.dt/60000)}}分{{Math.floor((((scope.row.dt/60000)%1)*60))}}秒</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
 
<style scoped>
</style>
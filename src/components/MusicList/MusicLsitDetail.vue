<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\MusicList\MusicLsitDetail.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-08 22:24:21
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-14 00:58:35
-->
<script setup lang='ts'>
import { ref, reactive, computed, onMounted } from 'vue';
import { ElTable } from 'element-plus';
import {getSongUrl} from '@/apis/request';
import store from '@/store';
let props = defineProps({
    musicListInfo: Object
})
// 计算属性获取传递归来的歌单
let len=ref(0);
let musicitem = computed(() => {
    // console.log("推荐歌单里的歌曲computed11111:", props);
    return props.musicListInfo;
})
// console.log("musicListInfo:+++++", musicListInfo.value);
// 改变表格列样式
const changeColumnStyle=({row,column,rowIndex,columnIndex})=>{
    if(columnIndex===2){
        return {
            cursor:"pointer"
        }
    }
}
// 改变行样式
const changeRowStyle=({row,rowIndex})=>{
    if(rowIndex<3){
        return {
            backgroundImage: 'linear-gradient(to right, #a18cd188 0%, #fbc2eb77 100%)'
        }
    }
}
// 点击歌名向vuex传递数据
const goclick=(row:any, column:any, cell:any, event:any)=>{
    // console.log("click:",row, column, cell, event);
    
    if(column.label==="歌名"){
        // console.log("clickRow:",row);
let singer=row.ar.map((item:any)=>item.name).join('/')
let play_queue=props.musicListInfo?.map((item:any)=>item.id)
console.log("singer:",singer);
    getSongUrl({id:row.id}).then((res:any)=>{
        // console.log("歌曲地址:",res);
        // console.log("store:",store);
        let song={
        id: row.id,
        name: row.name,
        singer: singer,
        album: row.al.name,
        url: res.data[0].url,
        dt:row.dt,
        cover: row.al.picUrl,
    }
        store.commit("setSong",song);
        store.commit("setPlayQueue",play_queue);
    })
    }
}
// console.log("dt:", dt);

</script>   
 
<template>
    <div class="music-list-item">
        <el-table :data="musicitem"  style="width: 100%" :cell-style="changeColumnStyle" :row-style="changeRowStyle" @cell-click="goclick">
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
                    <span >{{ scope.row.ar.map((item:any)=>item.name).join(' / ') }}</span>
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
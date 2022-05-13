<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\Singer\SingerSongsItem.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-13 22:34:24
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-14 00:34:35
-->
<script setup lang='ts'>
import { ref, reactive,computed } from 'vue';
import { ElTable } from 'element-plus';
import {getAlbum} from '@/apis/request';
const props = defineProps
    ({
        singerAlbum: Object
    })
    let AlbumId=ref({id:props.singerAlbum.id});
    let AlbumSong=  ref();
getAlbum(AlbumId.value).then((res:any)=>{
      console.log("专辑里的歌曲：",res)
        AlbumSong.value=res.songs
    })
    console.log("AlbumSongLLLL",AlbumSong)
</script>
 
<template>
    <div class="singer-albums" v-if="AlbumSong">
        <div class="hotsongs flex">
            <div class="hotsongs-img w-60 h-60 text-center text-7xl">
                <img :src="AlbumSong[0].al.picUrl" alt="">
            </div>
            <div class="hotsongs-list ml-10">
                <h3 class="text-left">{{AlbumSong[0].al.name}}</h3>
                <el-table :data="AlbumSong.slice(0, 10)" style="width: 100%" :show-header="false">
                    <el-table-column type="index" label="" width="60" />
                    <el-table-column label="操作" width="100">
                        <div class="option-music flex cursor-pointer">
                            <icon-font class="#icon-xihuan" fontSize="2rem"></icon-font>
                            <icon-font class="#icon-24px" fontSize="2rem"></icon-font>
                        </div>
                    </el-table-column>
                    <el-table-column prop="name" label="歌名" width="300" :show-overflow-tooltip="true" />
                    <el-table-column prop="ar" label="歌手" width="300" :show-overflow-tooltip="true">
                        <template #default="scope">
                            <span>{{ scope.row.ar.map((item: any) => item.name).join(' / ') }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column prop="al.name" label="专辑" width="300" :show-overflow-tooltip="true" />
                    <el-table-column prop="dt" label="时间">
                        <template #default="scope">
                            <span>{{ Math.floor(scope.row.dt / 60000) }}分{{ Math.floor((((scope.row.dt / 60000) % 1) *
                                    60))
                            }}秒</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

        </div>
    </div>
</template>
 
<style scoped>
</style>
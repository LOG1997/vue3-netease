<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Music\MusicList.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-08 10:13:07
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-08 22:23:30
-->
<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { getPlayListDetail } from '@/apis/request';
import MusicListInfo from '@/components/MusicList/MusicListInfo.vue';
const route = useRoute();
const playlistid = route.query.playlistid;
console.log("路由参数：", playlistid)
// 参数
let musicListInfo = ref(
    {
        name:'',
        coverImgUrl:'',
        description:'',
        tags:'',
        tracks_length:'',
        playCount:'',
        creator:{
            nickname:'',
            avatarUrl:'',
            userId:'',
        }
    }
);
let musicListDetail = ref([]);
getPlayListDetail({ id: playlistid }).then((res: any) => {
    console.log("歌单详情歌曲：", res);
    console.log("歌单详情歌曲：", musicListInfo);
    musicListInfo.value = res.playlist;
    musicListDetail.value = res.playlist.privileges;
})

</script>
 
<template>
    <!-- <h2>音乐列表</h2> -->
    <div class="music-list w-9/10 ml-9">

<MusicListInfo :musicListInfo="musicListInfo"></MusicListInfo>
    </div>
</template>
 
<style scoped>
</style>
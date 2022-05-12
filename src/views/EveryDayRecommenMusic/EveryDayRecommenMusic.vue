<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\EveryDayRecommenMusic\EveryDayRecommenMusic.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-12 23:30:14
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-12 23:44:03
-->
<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { getPlayListDetail,getRecommendMusic } from '@/apis/request';
import MusicListInfo from '@/components/MusicList/MusicListInfo.vue';
import MusicLsitDetail from '@/components/MusicList/MusicLsitDetail.vue';
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
// let musicListDetail = ref([]);
getRecommendMusic({}).then((res: any) => {
    // console.log("歌单详情歌曲：", musicListInfo);
    musicListInfo.value = res.data.dailySongs;
    console.log("推荐歌曲", musicListInfo);
    // musicListDetailList.value = res.playlist.privileges;
})

</script>
 
<template>
    <!-- <h2>音乐列表</h2> -->
    <div class="music-list w-9/10 ml-9">

<MusicLsitDetail :musicListInfo="musicListInfo"></MusicLsitDetail>
    </div>
</template>
 
<style scoped>
</style>
<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Playlist\AllPlaylist.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-06 12:11:12
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-06 17:07:03
-->
<script setup lang='ts'>
import { ref,reactive } from 'vue';
 
 import PlaylistHead from './PlaylistHead.vue';
 import PlaylistContainer from './Playlist_container.vue'
</script>
 
<template>
<PlaylistHead></PlaylistHead>
<PlaylistContainer></PlaylistContainer>
</template>
 
<style scoped>
 
</style>
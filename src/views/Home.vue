<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Home.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-02 21:45:33
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-09 16:40:24
-->
<script  setup lang='ts'>
import { ref, reactive } from 'vue'
import HelloWorld from '../components/HelloWorld.vue';
// import { getArtist } from '../apis/request';
import Head from '../components/Head/Head.vue';
import Footer from '../components/Footer/Footer.vue';
import LeftNav from "../components/LeftNav/LeftNav.vue";
import Main from "./Main/Main.vue";

import MainHead from "../components/MainHead/MainHead.vue";
// getArtist({ type: 1, area: 96, initial: "b" }).then(res => {
//     console.log(res)
// })
</script>
 
<template>
    <header>

        <Head class="z-10">
        </Head>
    </header>

    <main class="flex findmusic relative">
        <nav class="left-nav w-40 min-w-40 bg-red-200 relative">
            <LeftNav class="ml-5"></LeftNav>
        </nav>
        <main class="w-auto p-10 relative">

            <MainHead class="relative"></MainHead>
            <div class="main-view  h-100 w-full absolute">
                
            <router-view></router-view>
            </div>
            <!-- <Main ></Main> -->
        </main>
    </main>
    <footer class="h-20 z-30 mt-22">
        <Footer class="bg-red-200"></Footer>
    </footer>
</template>
 
<style scoped>
.left-nav {
    /* width: 60px; */
    height: calc(100vh - 10rem);
    min-height: calc(100vh - 10rem);;
    /* background: red; */
}

.main-view {
    width: calc(100vw - 12rem);
    min-width: calc(1600px - 12rem);
    overflow-y: scroll;
    overflow-x: none;
}
.findmusic{
    height: calc(100vh - 15.5rem);

}
</style>
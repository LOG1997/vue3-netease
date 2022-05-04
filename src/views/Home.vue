<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Home.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-02 21:45:33
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-04 13:04:54
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

    <main class="flex">
        <nav class="left-nav w-60 bg-red-200">
            <LeftNav class="ml-5"></LeftNav>
        </nav>
        <main class="w-auto p-10">

            <MainHead></MainHead>
            <Main class="home-swiper h-100"></Main>
        </main>
    </main>
    <footer class="h-20 bg-blue-200">
        <Footer></Footer>
    </footer>
</template>
 
<style scoped>
.left-nav {
    /* width: 60px; */
    height: calc(100vh - 10rem);
    /* background: red; */
}

.home-swiper {
    width: calc(100vw - 14.5rem)
}
</style>
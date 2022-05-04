<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\MainHome\HomeSwiper.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 17:13:37
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-03 18:03:05
-->
<template>
  <swiper :slides-per-view="1" :autoplay="{ delay: 2500, disableOnInteraction: false }" :loop="true" :space-between="50"
    :modules="modules">
    <swiper-slide class="bg-blue-100">Slide 1</swiper-slide>
    <swiper-slide class="bg-yellow-100">Slide 2</swiper-slide>
    <swiper-slide class="bg-green-100">Slide 3</swiper-slide>
    <swiper-slide class="bg-gray-100">Slide 4</swiper-slide>
    <swiper-slide class="bg-dark-100">Slide 5</swiper-slide>
    <swiper-slide class="bg-blue-100">Slide 6</swiper-slide>
  </swiper>
</template>

<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay]
    }
  }
}
</script>
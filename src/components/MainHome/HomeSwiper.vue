<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\MainHome\HomeSwiper.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 17:13:37
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-09 10:08:02
-->
<template>
  <div class="swiper-container w-100%">

    <swiper :autoplay="{ delay: 2500, disableOnInteraction: false }" :loop="true" :space-between="0" :modules="modules"
      :pagination="{ clickable: true }" :navigation="true" @swiper="onSwiper" @slideChange="onSlideChange"
      :loopFillGroupWithBlank="true" :slidesPerGroup="1" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true"
      :slidesPerView="3" :coverflowEffect="{
        rotate: 60,
        stretch: 1,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }" :lazy="true">

      <swiper-slide class="bg-blue-100" v-for="item in ban" :key="item.encodeId">
        <div class="swiper-img">

          <img :src="item.imageUrl" alt="">
          <div class="swiper-img-info">
            <span>{{ item.typeTitle }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, A11y, EffectCoverflow, Lazy } from 'swiper'
import { computed } from 'vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import "swiper/css/lazy";
const modules = [Autoplay, Navigation, Pagination, A11y, EffectCoverflow, Lazy]

const props = defineProps({
  banners: Object
});
const ban = computed(() => {
  return props.banners.banners
});
const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
// console.log("bannseee:", ban)
</script>


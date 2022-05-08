<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\views\Playlist\PlaylistHead.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-06 12:15:00
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-07 08:54:23
-->
<script setup lang='ts'>
import { ref, reactive, inject,computed } from 'vue';
import { debounce } from '@/logic/logic'
const hottags = inject("hottags")
const transferCatTags = inject("transferCatTags")
const getAlltags = inject("getAlltags")
const alltags = inject("alltags")
//  显示全部歌单分类
let isShowAllCat = ref(false)
function showAllCat() {
    isShowAllCat.value = !isShowAllCat.value;
    getAlltags();
    console.log("alltags:", alltags);
    
}
//  点击获取新分类歌单
function selectPlaylistCat(cat?: string) {
    console.log("点击获取新分类歌单:", cat);
    isShowAllCat.value=false
    debounce(() => {
        transferCatTags(cat)
    }, 500)()
}
let newtags=computed(()=>{
    let categories=alltags.value.categories;
    for(let i=0;i<5;i++){
      categories[i]=[];
    }
    for(let i=0;i<alltags.value.sub.length;i++){
      categories[alltags.value.sub[i].category].push(alltags.value.sub[i].name);
    }
    categories=JSON.stringify(categories);
    let reg0=new RegExp('\"0\":','i')
    let reg1=new RegExp('\"1\":','i')
    
    let reg2=new RegExp('\"2\":','i')
    
    let reg3=new RegExp('\"3\":','i')
    
    let reg4=new RegExp('\"4\":','i')
  categories=  categories.replace(reg0,'\"语种\":')
  categories=  categories.replace(reg1,'\"风格\":')
  categories=  categories.replace(reg2,'\"场景\":')
  categories=  categories.replace(reg3,'\"情感\":')
  categories=  categories.replace(reg4,'\"主题\":')
 categories= JSON.parse(categories)
 console.log("categories:", categories);
    return  categories
})








</script>
 
<template>
    <div class="playlist-head w-auto h-10 flex justify-between leading-10">
        <div class="all-catlist">
            <p class="text-gray-500 border-1 leading-8 mt-1 ml-2 border-white" @click="showAllCat">全部歌单</p>
        </div>
        <div class="hot-list-cat flex gap-3">
            <span v-for="item in hottags" :key="item.id" @click="selectPlaylistCat(item.name)">
                {{ item.name }}</span>
        </div>

    </div>
    <div class="all-playlist-cat w-200 h-100 absolute bg-blue-200 z-12 leading-10 text-left pl-10 divide-y" v-if="isShowAllCat">
        <span class="divide-y" @click="selectPlaylistCat()">全部歌单</span>
    <ul class="divide-y">
        <li v-for="(cat, catIndex) in newtags" :key="catIndex" ><span >{{catIndex }}</span>
            <ul class="grid grid-cols-6">
                <li v-for="item in cat" :key="item.index" @click="selectPlaylistCat(item)">
                    <span>
                        {{ item}}
                    </span>
                </li>
            </ul>
        </li>
    </ul>
    </div>

</template>
 
<style scoped>
</style>
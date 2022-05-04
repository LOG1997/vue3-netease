<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\Head\Head.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 13:48:37
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-04 13:12:19
-->
<script setup lang='ts'>
import { ref, reactive } from 'vue';
// 网易云logo
import wyyLogoVue from '@/assets/iconfont/wyy-logo.vue';
import UserLogin from '@/components/UserLogin/LoginRegister.vue';
import { loginCellphone } from '../../apis/request';
import { result } from 'lodash';
let isLoginView = ref(false);
const changeLoginView = () => {
    isLoginView.value = !isLoginView.value;
}
const submitLogin = (userInfo: object) => {
    console.log("父组件", userInfo);
    loginCellphone(userInfo).then(res => {
        console.log(res)
    })

};
// let userInfo={
//     phone: '15196725410',
//     password: '241624'
// }

// console.log("登陆结果",result);



</script>
 
<template>

    <div class="w-auto h-20 bg-red-500 flex">
        <!-- logo -->
        <div
            class="head-logo text-2xl gap-3 w-80 h-20 ml-16 justify-center flex items-center font-sans font-bold text-gray-100">
            <wyyLogoVue class="w-12 h-12"></wyyLogoVue>
            <span>网易云音乐</span>
        </div>
        <!-- 左右 -->
        <div class="gui-router flex leading-20 items-center gap-6">
            <div
                class="left-router bg-dark-200/50 rounded-3xl w-10 h-10 text-center flex justify-center items-center hover:bg-dark-200/80">
                <icon-font class="#icon-xiangzuo1"></icon-font>

            </div>
            <div
                class="right-router bg-dark-200/50 rounded-3xl w-10 h-10 text-center flex justify-center items-center hover:bg-dark-200/80">
                <icon-font class="#icon-xiangyou1"></icon-font>

            </div>
        </div>
        <!-- 搜索框 -->
        <div class="head-search ml-20 flex items-center">
            <input
                class="rounded-lg w-50 h-8 border-0 outline-none  bg-dark-200/50 placeholder-gray-200 pl-10 focus:bg-dark-200/80"
                type="text" placeholder="搜索音乐">
            <div class="search-logo absolute ml-2">
                <icon-font class="#icon-sousuo1"></icon-font>
            </div>
        </div>
        <!-- 听歌识曲 -->
        <div class="read-sing m-10 flex items-center">
            <div
                class="read-sing-icon w-10 h-10 rounded-3xl bg-dark-200/50 flex justify-center items-center hover:bg-dark-200/80">
                <icon-font class="#icon-huatong" fontSize="2rem" color="rgb(255,255,255,0.7)"></icon-font>

            </div>
        </div>
        <!-- 账户 -->
        <div class="userinfo ml-50 flex justify-center items-center gap-3 align-middle text-cool-gray-50 cursor-pointer"
            @click="changeLoginView">
            <!-- 默认头像 -->
            <div class="userinfo-avatar w-10 h-10 rounded-full">
                <icon-font class="#icon-touxiang" fontSize="2.4rem" color="#e7e7e7"></icon-font>
            </div>
            <span>未登录</span>
            <span v-if="false">真雨村</span>
        </div>
        <UserLogin class="z-10" v-if="isLoginView" @submitLogin="submitLogin"></UserLogin>
        <!-- 皮肤、设置 -->
        <div class="pifu-setting flex justify-center items-center gap-5 ml-20">
            <div class="pifu-icon">
                <icon-font class="#icon-pifu" fontSize="1.5rem"></icon-font>
            </div>
            <div class="setting-icon">
                <icon-font class="#icon-shezhi" fontSize="1.8rem"></icon-font>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
.head-search input::placeholder {
    /* padding-left: 2rem; */
    color: #e7e7e79e;
}
</style>

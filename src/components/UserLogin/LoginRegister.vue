<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\UserLogin\LoginRegister.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-04 10:29:40
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-04 11:39:04
-->
<script setup lang='ts'>
import { ref,reactive } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
 const emits = defineEmits(['submitLogin','cancelLogin'])
 function submitLogin(data:any){
        console.log("子组件",data)
        let phone=data.phone;
        let password=data.password;
        emits("submitLogin",{
            phone,password
        }
        )
 }
 function cancelLogin(){
    emits("cancelLogin")
 }
 let formData=ref({
        phone:'',
        password:'',
 })
</script>
 
<template>


<div class="absolute w-90 h-80 z-11 bg-light-400/100 mt-20 ml-250  shadow-sm">
    <div class="login_label text-3xl h-20 leading-20">
        <span>登录</span>
    </div>
    <div class="form-floating mb-3 w-2/3 m-auto">
        
  <input type="email" class="form-control" id="floatingInput" placeholder="your phonenumber" v-model="formData.phone">
  <label for="floatingInput">手机号</label>
</div>
<div class="form-floating w-2/3 m-auto">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="formData.password">
  <label for="floatingPassword">密码</label>
</div>
<div class="bt-button mt-3">
<button type="button" class="btn btn-primary mr-10" @click="submitLogin(formData)">登录</button>
<button type="button" class="btn btn-secondary" @click="cancelLogin">取消</button>
</div>
</div>
<div class="boli absolute w-90 h-80 bg-light-400 opacity-10 mt-20 ml-250 z-10"></div>
</template>
 
<style scoped>
.boli{
 background-image: linear-gradient(-20deg, #eb373761 20%, #11f44204 70%);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    border:0.5px solid #ffffff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    justify-content: center;
    align-items: center;
}
</style>
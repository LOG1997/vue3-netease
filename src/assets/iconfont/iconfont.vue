<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\assets\iconfont\iconfont.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-03 14:54:28
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-08 22:44:54
-->

<template>
    <svg class="icon" aria-hidden="true" :width="fontSize" :height="fontSize">
        <use :xlink:href="class" :fill="color"></use>
    </svg>
</template>
 
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    created() {
        let iconfont = document.getElementById('iconfont');
        if (!iconfont) {
            const s = document.createElement('script');
            s.id = 'iconfont';
            s.type = 'text/JavaScript';
            s.src = this.scriptUrl;
            document.body.appendChild(s);
        }
    },
    props: {
        scriptUrl: {//iconfont上的symbol地址
            type: String,
            default: "https://at.alicdn.com/t/font_3373539_ajche4yvbrc.js"
        },
        class: String,//需要添加的字体图标类
        color: {//图标颜色
            type: String,
            default: '#ffffff'
        },
        fontSize: {//图标大小
            type: [String, Number],
            default: 16
        }
    }
})
</script>
 
<style scoped>
.icon {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
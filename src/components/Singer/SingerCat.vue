<!--
 * @Author: LOG
 * @FilePath: \vue3-netease\src\components\Singer\SingerCat.vue
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-07 23:32:02
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-09 10:09:08
-->
<script setup lang='ts'>
import { ref, reactive, watch } from 'vue';
const area = [{
    name: '全部',
    id: '-1',
},
{
    name: '华语',
    id: '7',
}, {
    name: '欧美',
    id: '96',
}, {
    name: '日本',
    id: '8',
}, {
    name: '韩国',
    id: '16',
}, {
    name: '其他',
    id: '0',
}
]
const type = [
    {
        name: '全部',
        id: '-1',
    },
    {
        name: "男歌手",
        id: "1",
    }, {
        name: "女歌手",
        id: "2",
    }, {
        name: "其他",
        id: "3",
    },
]
const initial = ["热门", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "#"]
console.log("字母", JSON.stringify(initial))
// 请求歌单信息
// let sendArg = ref({ type: "-1", area: "96", initial: "-1" });
const props = defineProps({
    sendArg: Object,
})

function sendArea(str: string) {
    console.log("地区：", str)
    props.sendArg.area = str
}
function sendType(str: string) {
    console.log("类型：", str)
    props.sendArg.type = str
}
function sendInitial(str: string) {
    console.log("字母：：", str)
    if (str == "#") {
        str = "0"
    } if (str == "热门") {
        str = "-1"
    }
    props.sendArg.initial = str
}
// 向父组件传递数据
const emits = defineEmits(["changeArg"])
function changeArg(arg: any) {
    emits("changeArg", arg)
}

watch(props.sendArg, (newName, oldName) => {
    // console.log("子newName", newName);
    // console.log("子oldName", oldName);
    changeArg(props.sendArg)
}, { deep: true });

</script>
 
<template>
    <div class="all-cat  text-left">
        <div class="flex flex-wrap w-full">
            <div class="w-30">语种：</div>
            <ul class="flex gap-x-6 ">
                <li v-for="item in area" :key="item.id" @click="sendArea(item.id)">{{ item.name }}</li>
            </ul>
        </div>
        <div class="flex flex-wrap w-full">
            <div class="w-30">分类:</div>
            <ul class="flex gap-x-6 ">
                <li v-for="item in type" :key="item.id" @click="sendType(item.id)">{{ item.name }}</li>
            </ul>
        </div>
        <div class="flex flex-wrap w-full">
            <div class="w-30">筛选：</div>
            <ul class="flex gap-x-6 flex-wrap flex-1">
                <li v-for="(item, index) in initial" :key="index" @click="sendInitial(item)">{{ item }}</li>
            </ul>
        </div>
    </div>

</template>
 
<style scoped>
li {
    cursor: pointer;
    width: 5rem;
    height: 3rem;
}
</style>
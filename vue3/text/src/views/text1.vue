<template>
    <div class="items" v-for="item in data" :key="item.index">
        <img :src="item.img" >
        <div>
            <p>{{data.title}}</p>
            <div>
                <van-icon name="good-job-o" size="30"/>
                <van-icon name="browsing-history-o" size="30"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, reactive } from 'vue'
const data = reactive([
    {
        img:'../../public/images/one.jpeg',
        title:'新科技让机器人助力医疗，提升手术精度'
    },
    {
        img:'../../public/images/two.jpeg',
        title:'疫情下的“双倍奏效”：狗狗成新型检测员'
    },
    {
        img:'../../public/images/three.jpeg',
        title:'环保不再是难题：可回收材料3D打印技术大热'
    },
    {
        img:'../../public/images/four.jpeg',
        title:'气候变化加剧，南极洲冰川消融速度加快'
    },
    {
        img:'../../public/images/five.jpeg',
        title:'科技创新，未来军舰将搭载激光武器系统'
    },
    {
        img:'../../public/images/six.jpeg',
        title:'智能家居进入升级版，让生活更智慧'
    },
    {
        img:'../../public/images/seven.jpeg',
        title:'疫苗接种不再繁琐，微信小程序推出预约平台'
    },
    {
        img:'../../public/images/eight.jpeg',
        title:'跨国合作，中国研发的新冠疫苗将在全球推广'
    },
    {
        img:'../../public/images/nine.jpeg',
        title:'全球热浪持续，人们如何应对？'
    },
    {
        img:'../../public/images/ten.jpeg',
        title:'机器学习技术助力金融行业，防范风险更精准'
    }
])
</script>

<style lang="stylus">
items 
    height 500px
    width 100%
    overflow hidden
    
img
    width 30px
    height 30px
</style>
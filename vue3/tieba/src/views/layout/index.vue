<template>
    <div class="container">
        <router-view></router-view>
        <van-tabbar v-model="active" route >
            <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/sort">进吧</van-tabbar-item>
            <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<style lang="stylus" scoped>
.container
    background-color #F5F5F5
</style>
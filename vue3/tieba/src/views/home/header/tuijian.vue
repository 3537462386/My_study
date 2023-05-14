<template>
    <div>
        <van-tabs v-model:active="activeName" route swipeable line-width="0" background="#F5F5F5">
            <van-tab title="全部" name="a" to="/all"></van-tab>
            <van-tab title="直播" name="b" to="/tv"></van-tab>
            <van-tab title="游戏" name="c" to="/game"></van-tab>
            <van-tab title="数码" name="c" to="/vedio"></van-tab>
            <van-tab title="娱乐" name="c" to="/play"></van-tab>
            <van-tab title="影视" name="c" to="/watch"></van-tab>
            <van-tab title="动漫" name="c" to="/anime"></van-tab>
            <van-tab title="体育" name="c" to="/sports"></van-tab>
            <van-tab title="小说" name="c" to="/xs"></van-tab>
        </van-tabs>
        <router-view></router-view>

    </div>
</template>

<script setup>
import {ref} from 'vue'

const activeName = ref('a')
</script>

<style lang="scss" scoped></style>
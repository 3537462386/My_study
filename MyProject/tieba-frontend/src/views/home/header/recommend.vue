<template>
    <div>
        <van-config-provider :theme-vars="themeVars">
            <van-tabs v-model:active="activeName" route swipeable line-width="0" background="#F5F5F5">
                <van-tab title="全部" name="a" to="/app/home/recommend/all"></van-tab>
                <van-tab title="直播" name="b" to="/app/home/recommend/tv"></van-tab>
                <van-tab title="游戏" name="c" to="/app/home/recommend/game"></van-tab>
                <van-tab title="数码" name="c" to="/app/home/recommend/vedio"></van-tab>
                <van-tab title="娱乐" name="c" to="/app/home/recommend/play"></van-tab>
                <van-tab title="影视" name="c" to="/app/home/recommend/watch"></van-tab>
                <van-tab title="动漫" name="c" to="/app/home/recommend/anime"></van-tab>
                <van-tab title="体育" name="c" to="/app/home/recommend/sports"></van-tab>
                <van-tab title="小说" name="c" to="/app/home/recommend/xs"></van-tab>
            </van-tabs>
        </van-config-provider>
        <router-view></router-view>

    </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'

const activeName = ref('a')

const themeVars = reactive({
    tabsLineHeight: '25px'
});
</script>

<style lang="scss" scoped></style>
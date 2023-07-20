<template>
    <div class="container">
        <van-config-provider :theme-vars="themeVars">
            <van-tabs v-model:active="activeName" @click-tab="onClickTab" swipeable line-width="0" background="#F5F5F5">
                <van-tab title="全部" name="a" ></van-tab>
                <van-tab title="直播" name="b" ></van-tab>
                <van-tab title="游戏" name="c" ></van-tab>
                <van-tab title="数码" name="d" ></van-tab>
                <van-tab title="娱乐" name="e" ></van-tab>
                <van-tab title="影视" name="f" ></van-tab>
                <van-tab title="动漫" name="g" ></van-tab>
                <van-tab title="体育" name="h" ></van-tab>
                <van-tab title="小说" name="i" ></van-tab>
            </van-tabs>
        </van-config-provider>
        <Posts :sort="nowSort"></Posts>
    </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import Posts from '@/components/Posts.vue'

const activeName = ref('a')
const nowSort = ref('')
const onClickTab = ({ title }) =>  {
    nowSort.value = title
}

const themeVars = reactive({
    tabsLineHeight: '25px'
});
</script>

<style lang="stylus" scoped>
.container 
    width 100%
    height 100%
</style>
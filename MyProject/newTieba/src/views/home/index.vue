<template>
    <div class="container">
        <van-sticky>
            <div class="header">
                <van-icon name="play-circle-o" size="25px"></van-icon>
                <van-config-provider :theme-vars="themeVars">
                    <van-tabs v-model:active="activeName" swipeable route background="#F5F5F5" line-width="15px"  line-height="3px" color="#0000FF">
                        <van-tab title="关注" name="a" to="/app/home/attention"></van-tab>
                        <van-tab title="推荐" name="b" to="/app/home/recommend"></van-tab>
                        <van-tab title="热门" name="c" to="/app/home/hot"></van-tab>
                    </van-tabs>
                </van-config-provider>
                <van-icon name="search" size="25px" @click="insearch"></van-icon>
            </div>
        </van-sticky>
    </div>
    <router-view></router-view>
</template>

<script setup lang="ts">
import {router} from '@/router/index'
import { ref, reactive } from 'vue'

const insearch = () => {
    router.push({ path: '/search/rs' })
}

const activeName = ref('b')

const themeVars = reactive({
    tabFontSize: '16px',
    tabLineWidth: '10x',
    tabsLineHeight: '30px'
});
</script>

<style lang="stylus" scoped>
.container
    width 100%
    height 100%
    .header
        width 100%
        display flex
        flex-direction  row
        justify-content space-around
        align-items center
        height 35px
        background-color #F5F5F5
        padding 5px 0 0 0
</style>

<template>
    <div class="container">
        <van-sticky>
            <div class="header">
                <van-icon name="play-circle-o" size="25px"></van-icon>
                <van-config-provider :theme-vars="themeVars">
                    <van-tabs v-model:active="activeName" swipeable route background="#F5F5F5" line-width="20px"
                        color="#F5F5F5">
                        <van-tab title="关注" name="a" to="guanzhu"></van-tab>
                        <van-tab title="推荐" name="b" to="tuijian"></van-tab>
                        <van-tab title="热门" name="c" to="remen"></van-tab>
                    </van-tabs>
                </van-config-provider>
                <van-icon name="search" size="25px" @click="insearch"></van-icon>
            </div>
        </van-sticky>
    </div>
    <router-view class="body"> </router-view>
</template>

<script setup>
import router from '@/router'
import { ref, reactive } from 'vue'

const insearch = () => {
    router.push({ path: '/rs' })
}

const activeName = ref('b')

const themeVars = reactive({
    tabFontSize: '18px',
    tabLineWidth: '15x'
});
</script>

<style lang="stylus" scoped>
.container
    
    .header
        width 100%
        display flex
        flex-direction  row
        justify-content space-around
        align-items center
        height 35px
        background-color #F5F5F5
        padding 10px 0
.body
    // margin-top 35px

</style>

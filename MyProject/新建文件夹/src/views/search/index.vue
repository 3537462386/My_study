<template>
    <div class="container">
        <form action="/">
            <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel"
                shape="round" autofocus/>     
        </form>
        <van-tabs sticky swipeable route  line-width="15px">
            <van-tab title="热搜榜" name="a" to="rs"></van-tab>
            <van-tab title="热吧榜" name="b" to="rb"></van-tab>
            <van-tab title="游戏榜" name="c" to="yx"></van-tab>
            <van-tab title="直播榜" name="c" to="zb"></van-tab>
        </van-tabs>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import {router} from '../../router/index'
// import { ref } from 'vue'
// const active = ref(0)
const onSearch = () => {}
const onCancel = () => {
    router.push('/app/home/recommend/all')
}
</script>

<style lang="stylus" scoped>

</style>
<template>
    <div class="container">
        <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" @focus="insearch"/>
        <van-tabs route sticky>
                <van-tab title="我的吧" to="myba"></van-tab>
                <van-tab title="吧广场" to="spaceba"></van-tab>
        </van-tabs>
        <router-view> </router-view> 
    </div>
</template>

<script setup>
import router from '@/router'

const insearch = () => {
    router.push({path:'/rs'}) 
}
</script>

<style lang="stylus" scoped>
.container
    margin 0
</style>
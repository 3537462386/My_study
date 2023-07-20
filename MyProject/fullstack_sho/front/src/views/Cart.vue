<template>
    <div class="header">
        <div class="title">
            购物车
            <div class="sum">共{{ state.cartData.length }}件商品</div>
            <div class="handle">管理</div>
        </div>
    </div>
</template>
<script setup>
import { showLoadingToast, showToast } from 'vant';
import { nextTick, reactive } from 'vue';
import { useRouter } from 'vue-router';
const state = reactive({
    userData: {},
    cartData: []
})
const router = useRouter();
nextTick(async () => {
    showLoadingToast({ message: '加载中', forbidClick: true, duration: 0})
    state.userData = JSON.parse(sessionStorage.getItem('userInfo'))
    if (state.userData == null) {
        setTimeout(() => {
            showToast('您还没有登录');
            router.push('/login');
        }, 1000)
    }
})

</script>
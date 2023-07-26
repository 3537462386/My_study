<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <div class="container">
            <div class="item" v-for="item in state.recommendData" :key="item.id" @click="gotodetail">
                <div class="headers">
                    <img :src="item.titleimg">
                    <div>
                        <div class="headers_top">{{ item.name }}<van-icon name="apps-o"></van-icon></div>
                        <div class="headers_f">关注&nbsp;{{ item.num1 }}&nbsp;帖子&nbsp;{{ item.num2 }}</div>
                    </div>
                </div>
                <div class="bodys">
                    <b>{{ item.title }}</b>
                    <div>{{ item.text }}</div>
                    <img :src="item.img" />
                </div>
                <div class="foots">
                    <div><van-icon name="share-o" />&nbsp;{{ item.num3 }}</div>
                    <div><van-icon name="other-pay" />&nbsp;{{ item.num4 }}</div>
                    <div><van-icon name="good-job-o" />&nbsp;{{ item.num5 }}</div>
                </div>
            </div>

        </div>
    </van-pull-refresh>
</template>

<script setup lang="ts">
import { onMounted ,ref,reactive} from 'vue'
import { showToast } from 'vant'
import {router} from '../../../../router/index'
// import { getRecommend } from '../../../../service/index'

const loading = ref(false)
const state = reactive({
    recommendData: [],
})

const getRecommendData = async () => {
//   const { data } = await getRecommend()
//   state.recommendData = data.itemlist

}
onMounted(async () => {
    await getRecommendData()
})

const gotodetail = () => {
    router.push({ path: "/detail" })
}

const onRefresh = () => {
    setTimeout(() => {
        showToast('刷新成功')
        loading.value = false
    }, 1000)
}
</script>

<style lang="stylus" scoped>
.container
    width 100%
    display flex    
    flex-direction column
    align-items center
    .item
        width 88%
        margin 5px 0
        border-radius 10px
        background-color #FFFFFF
        padding 10px
        .bodys 
            display flex
            flex-direction column
            margin 1px
            max-width 60%
            > *
                margin 3px
                border-radius 5px
        .headers
            display flex
            margin 1px
            > *
                margin 3px
            img         
                width 28px
                height 28px
                border-radius 5px
            .headers_f
                opacity 0.5
                margin 3px 0
                transform-origin 0 0 
                transform scale(0.8,0.8)
        .foots
            display flex
            justify-content space-around
            margin 10px 0 0 0
</style>
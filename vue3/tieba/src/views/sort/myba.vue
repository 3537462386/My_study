<template>
    <div class="container">
        <div class="header">
            <b>最近逛的吧</b>
            <div class="header_items">
                <div class="header_item" v-for="item in tuijians" :key="item.id">
                    <div class="header_item_icon"><van-icon name="https://i.328888.xyz/2023/03/16/K8Dcy.jpeg" badge="99+"
                            size="40px" class-prefix="icon" /></div>
                    <div>{{ item.name }}</div>
                    <div class="header_item_guanzhu">关注{{ item.num1 }}W</div>
                </div>
            </div>
        </div>

        <div class="body">
            <b>我关注的吧</b>
            <div class="body_items">
                <div class="body_item" v-for="item in tuijians" :key="item.id">
                    <img :src="item.titleimg">
                    <div class="body_item_m">
                        <div>{{ item.name }}</div>
                        <div class="body_item_ms">关注&nbsp;{{ item.num1 }}</div>
                    </div>
                    <van-icon name="https://i.328888.xyz/2023/03/19/M9A9H.png"></van-icon>
                </div>
            </div>
        </div>

        <div class="foot">
            <b>热门吧精选</b>
            <div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { usetuijian } from '@/store/tuijian'

const tuijianstore = usetuijian()
const tuijians = computed(() => tuijianstore.tuijian)
onMounted(async () => {
    await tuijianstore.gettuijians()
})
</script>

<style lang="stylus" scoped>
.container 
    display flex
    flex-direction column
    > *
        margin 3px
    .header
        margin 5px 5px 0 5px
        padding 10px 5px 0 5px
        background-color #FFFFFF
        border-radius 7px
        .header_items
            width 100%
            overflow hidden
            overflow-x scroll
            white-space nowrap
        ::-webkit-scrollbar 
                width: 0
            .header_item
                margin 3px
                display inline-block
                display felx
                flex-direction column
                align-items center
                > *
                    margin 3px
                
                .header_item_guanzhu
                    opacity 0.5
                    margin 3px 0
                    transform-origin 0 0 
                    transform scale(0.8,0.8)
    .body
        margin 5px
        padding 10px 5px 0 5px
        background-color #FFFFFF
        border-radius 7px
        .body_items
            width 90vw
            display flex
            flex-direction row
            flex-wrap wrap
            align-items center
            justify-content space-between
            .body_item
                width 40vw
                display flex
                margin 5px 
                img 
                    width 30px
                    height 30px 
                    border-radius 30%
                    margin 0  5px
                .body_item_m
                    width 180px
                    .body_item_ms
                        opacity 0.5
                        margin 3px 0
                        transform-origin 0 0 
                        transform scale(0.8,0.8)
    .foot   
        margin 5px
        padding 10px 5px 0 5px
        background-color #FFFFFF
        border-radius 7px                   
</style>    
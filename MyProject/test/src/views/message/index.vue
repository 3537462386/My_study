<template>
    <div class="container">
        <div class="header">
            <div class="header_l"></div>
            <div class="header_m">消息</div>
            <div class="header_r">
                <van-icon name="envelop-o" />发私信
            </div>
        </div>
        <div class="body">
            <div class="body_one">
                <van-icon name="https://i.328888.xyz/2023/03/19/MJqx5.png" badge="99+" size="30px" />
                <div>@我的</div>
            </div>
            <div class="body_two">
                <van-icon name="https://i.328888.xyz/2023/03/19/MJuM8.png" badge="99+" size="30px" />
                <div>点赞</div>
            </div>
            <div class="body_three">
                <van-icon name="https://i.328888.xyz/2023/03/19/MKitZ.png" badge="99+" size="30px" />
                <div>回复</div>
            </div>
            <div class="body_four">
                <van-icon name="https://i.328888.xyz/2023/03/19/MKVcF.png" badge="99+" size="30px" />
                <div>粉丝</div>
            </div>
        </div>
        <div class="foot">
            <div class="foot_item">
                <div class="foot_item_l">
                    <van-image round width="50px" height="50px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                </div>
                <div class="foot_item_m">
                    <div class="foot_item_mt">吧广场</div>
                    <div class="foot_item_ms">3537462386</div>
                </div>
                <div class="foot_item_r">
                    <div class="foot_item_rt">1天前</div>
                    <block><van-badge :content="1" /></block>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style lang="stylus" scoped>
.container 
    background-color #FFFFFF
    .header
        width 100%
        padding 5px
        display flex
        justify-content space-between
        > *
            margin 5px
        .header_l
            width 25%
            display flex
        .header_m
            width 25%
            display flex
            justify-content center
            font-size 18px
        .header_r
            width 25%
            display flex
            justify-content flex-end
    .body
        margin  10px
        display flex
        width 100% 
        justify-content space-around
        .body_one
            > *
                margin 4px
        .body_two
            > *
                margin 4px
        .body_three
            > *
                margin 4px
        .body_four
            > *
                margin 4px
    .foot
        display flex
        width 100%
        flex-direction column
        align-content center
        margin 15px 0
        border 1px solid #D3D3D3
        border-right 0
        border-left 0
        border-bottom 0
        .foot_item
            margin 20px 10px
            display flex
            align-items center
            .foot_item_l
                flex 1
                height 52px
            .foot_item_m
                height 52px
                flex 5
                padding 0 15px
                display flex
                flex-direction column
                justify-content space-evenly
                .foot_item_mt
                    font-size 16px
                .foot_item_ms
                    font-size 16px
                    opacity 0.5
                    transform-origin 0 0 
                    transform scale(0.8,0.8)
            .foot_item_r
                flex 1
                height 52px
                .foot_item_rt
                    margin 0 0 15px 0
                    font-size 16px
                    opacity 0.5
                    transform-origin 0 0 
                    transform scale(0.8,0.8)
</style>
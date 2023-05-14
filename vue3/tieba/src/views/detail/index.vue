<template>
    <div class="container">
        <van-sticky>
            <div class="header">
                <van-icon name="arrow-left" size="25" @click="myreturn" />
                <div class="header_m">
                    <img src="https://i.328888.xyz/2023/03/30/iCNocX.jpeg" alt="iCNocX.jpeg" border="0" />
                    <p>csgo吧</p>
                </div>
                <div class="header_r">
                    <van-icon name="share-o" size="25" />
                    <van-icon name="ellipsis" size="25" />
                </div>
            </div>
        </van-sticky>
        <div class="body">
            <div class="body_h">
                <img src="https://i.328888.xyz/2023/03/14/9sAZa.jpeg" alt="9sAZa.jpeg" border="0" />
                <div class="body_h_name">
                    <b>肥嘟嘟左卫门</b>
                    <div class="body_h_names">关注&nbsp;2&nbsp;&nbsp;粉丝&nbsp;3</div>
                </div>
                <div class="body_h_btn">
                    关注
                </div>
            </div>
            <div class="body_b">
                <h1>一群f5,看我开吧教学局</h1>
                <p>看好了，什么是撩妹马到成功</p>
                <img src="https://i.328888.xyz/2023/03/16/K8tf8.jpeg" alt="K8tf8.jpeg" border="0" />
                <div class="body_b_fd">
                    <div><van-icon name="share-o" size="30" />
                        <p>分享</p>
                    </div>
                    <div><van-icon name="good-job-o" size="30" />
                        <p>点赞</p>
                    </div>
                </div>
                <div class="body_b_ba">
                    <img src="https://i.328888.xyz/2023/03/16/K8tf8.jpeg">
                    <div>
                        <div>孙笑川吧<van-icon name="apps-o"></van-icon></div>
                        <div class="sbottom">关注&nbsp;387.9W&nbsp;帖子&nbsp;9.9KW</div>
                    </div>
                </div>
            </div>
            <div class="body_f">
                <div class="items">
                    <div class="item">
                        
                    </div>
                </div>
            </div>
        </div>
        <van-sticky position="bottom">
            <div class="foot" >
                <input type="text" placeholder="发帖千百度，文明第一步">
                <van-icon name="chat-o" size="25" />
                <van-icon name="good-job-o" size="25" />
                <van-icon name="star-o" size="25" />
            </div>
        </van-sticky>
    </div>
</template>

<script setup>
import router from '@/router'
const myreturn = () => {
    router.go(-1)

}
</script>

<style lang="stylus" scoped>
.container
    background-color white
    width 100%
    .header
        display flex
        justify-content space-between
        width 100%
        height 40px
        padding  10px 0
        background-color white
        .header_m
            width 100px
            height 25px
            background-color #D3D3D3
            border-radius 10px
            display flex
            align-items center
            justify-content space-around
            img 
                width 20px
                height 20px
                border-radius 5px
            p
                font-size 20px
        .header_r
            > *
                margin 0 10px  
    .body
        padding 0 20px
        width 100%
        .body_h
            width 100%
            display flex
            align-items center
            border-radius 10px 10px 0 0
            img 
                width 40px
                height 40px
                border-radius 50%
            .body_h_name
                height 40px
                padding 2px 10px
                display flex
                flex-direction column
                justify-content space-around
                flex 1
                .body_h_names
                    opacity 0.5
                    transform-origin 0 0 
                    transform scale(0.8,0.8)
                b
                    color red   
            .body_h_btn
                height 25px
                width 60px
                background-color #87CEFA
                border-radius 10px
                color #4169E1
                display flex
                align-items center
                justify-content space-evenly
        .body_b
            > *
                margin 15px  0    
            img 
                width 90%
            .body_b_fd
                height 100px
                width 100%
                display flex
                align-items center
                justify-content space-around
            .body_b_ba
                display flex
                margin 1px
                > *
                    margin 3px
                img         
                    width 28px
                    height 28px
                    border-radius 5px
                .sbottom
                    opacity 0.5
                    margin 3px 0
                    transform-origin 0 0 
                    transform scale(0.8,0.8)
    .foot
        display flex
        align-items center
        width 100%
        height 50px
        margin 10px
        input
            width 70%
            height 35px
            border-radius 20px
            border none 
            background-color #DCDCDC
            font-size 18px
</style>
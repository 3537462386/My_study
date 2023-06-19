<template>
    <div class="container">
        <router-view></router-view>
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="wap-home-o" to="/app/home">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/app/sort">进吧</van-tabbar-item>
            <van-tabbar-item>
                <template #icon="props">
                    <img :src="icon.active" class="addimg" @click="addpost" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item icon="chat-o" to="/app/message">消息</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/app/my">我的</van-tabbar-item>
        </van-tabbar>
        <van-action-sheet v-model:show="state.showAdd">
            <div class="addBody">
                <div class="header" @click="gotoAddPost">
                    <h3>发布贴子</h3>
                    <div class="header_text">来吧，尽情发挥吧。。。</div>
                </div>
                <div class="foot">
                    <div class="item">
                        <img src="/post.png">
                        <p>文章</p>
                    </div>
                    <div class="item">
                        <img src="/wenti.png">
                        <p>求助</p>
                    </div>
                    <div class="item">
                        <img src="vi.png">
                        <p>视频</p>
                    </div>
                    <div class="item">
                        <img src="zhibo.png">
                        <p>直播</p>
                    </div>
                </div>
            </div>
        </van-action-sheet>
        <van-action-sheet v-model:show="state.showAddPost">
            <AddPost @exitAddPost="clickEven" class="addpost"></AddPost>
        </van-action-sheet>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import router from '../../router/index'
import AddPost from '../../components/AddPost.vue'
const state = reactive({
    showAdd: false,
    showAddPost:false
})
const icon = {
    active: '/add.png'
}
const addpost = () => {
    state.showAdd = true
}
const gotoAddPost = () => {
    state.showAddPost = true
    state.showAdd = false
}
const clickEven = (val:boolean) => {
    state.showAddPost = val
}
</script>

<style lang="stylus" scoped>
.container
    background-color #F5F5F5
    width 100vw
    height 100%
    .addimg
        height 50px
        width 50px
    .addBody
        height 170px
        width 340px
        padding 20px 10px 30px 10px
        .header
            height 90px
            width 100%
            padding 15px
            background-color #F5F5F5
            border-radius 10px
            > * 
                margin 10px
            .header_text
                opacity: 0.5
        .foot
            display flex
            justify-content space-between
            align-items center
            height 40px
            width 370px
            margin-top 30px
            .item
                display flex
                justify-content space-between
                align-items center
                width 60px
                img 
                    width 25px
                    height 25px
    .addpost
        height 80vh
        width 100vw
</style>
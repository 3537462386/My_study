<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <div class="container">
            <div class="item" v-for="item in state.Posts" :key="item._id" @click="gotodetail(item._id)">
                <div class="headers">
                    <img src="/test.png">
                    <div>
                        <div class="headers_top">{{ item.tagsId.name }}吧<van-icon name="apps-o"></van-icon></div>
                        <div class="headers_f">关注&nbsp;888k&nbsp;帖子&nbsp;888k</div>
                    </div>
                </div>
                <div class="bodys">
                    <b>{{ item.title }}</b>
                    <div>{{ item.content }}</div>
                    <img :src="item.imgs" />
                </div>
                <div class="foots">
                    <div><i class="fas fa-share" style="color: blue;"></i>&nbsp;{{ item.views }}</div>
                    <div><i class="fas fa-comment" style="color: blue;"></i>&nbsp;{{ item.views }}</div>
                    <div><i @click="ifLikePost(item)" :class="[item.isLiked ? 'fas fa-heart' : 'far fa-heart']" style="color: blue;"></i>&nbsp;{{ item.likes }}</div>
                </div>
            </div>
        </div>
    </van-pull-refresh>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { onMounted } from '@vue/runtime-core'
import { showToast } from 'vant'
import { router } from '@/router/index'
import { getAllPosts, likePost } from '@/service'
import { useUserStore } from '../store/user'
const userStore = useUserStore()
const loading = ref(false)
const props = defineProps({
    sort: String
})

const state = reactive({
    Posts: [],
})

const gotodetail = (a) => {
    // router.push({ path: `/app/post/:${a}` })
}

const getAllPostData = async () => {
    if(userStore.userId) {
        const result = await getAllPosts(userStore.userId)
        state.Posts = result.data
        console.log(result.data)
    }else {
        const result = await getAllPosts()
        state.Posts = result.data
        console.log(result.data)
    }
}
const onRefresh = () => {
    setTimeout(() => {
        showToast('刷新成功')
        loading.value = false
    }, 1000)
}

const ifLikePost = async (item) => {
    if(!userStore.userId) {
        console.log(userStore.userId)
        router.push({ path: '/login' })
        return
    }
    item.isLiked = !item.isLiked
    await likePost({
        userId: userStore.userId,
        postId: item._id
    })
}
onMounted(async () => {
    getAllPostData()
})

</script>

<style lang="stylus" scoped>
@import url('https://use.fontawesome.com/releases/v5.15.3/css/all.css')
.container
    width 100%
    display flex    
    flex-direction column
    align-items center
    height 100%
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
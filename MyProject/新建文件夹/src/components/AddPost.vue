<!-- template -->
<template>
  <div class="container">
    <!-- header section -->
    <div class="header">
      <van-nav-bar title="发布文章" left-text="" right-text="发布" left-arrow @click-left="onClickLeft"
        @click-right="onClickRight" />
    </div>
    <!-- body section -->
    <div class="mybody">
      <van-cell value="" is-link @click="chooseBa">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="chooseba">
            <van-icon name="apps-o" />
            <span>{{state.FormData.tags}}</span>
          </div>
        </template>
      </van-cell>
      <van-cell-group inset style="margin:0">
        <van-field v-model="state.FormData.title" placeholder="请输入完整贴子标题"
          style="border-top: 1px solid #F5F5F5;border-bottom: 1px solid #F5F5F5;" />
        <van-field v-model="state.FormData.content" rows="2" autosize type="textarea" maxlength="50"
          placeholder="来吧，尽情发挥吧。。。" show-word-limit />
      </van-cell-group>
      <van-uploader v-model="state.nowimgs" multiple />
    </div>
    <!-- <div class="actions">
      <van-uploader v-model="state.FormData.imgs">
        <van-icon name="photo" size="30" @click="" />
      </van-uploader>
    </div> -->
    <van-action-sheet v-model:show="state.showChoose" title="选择/关注的吧">
      <div class="chooseBody">
          <div class="item" v-for="item in state.allTags" :key="item._id" @click="chooseBaed(item)">
            <img src="/tesst.png" alt="">
            <h2>{{item.name}}</h2>
          </div>
      </div>
    </van-action-sheet>
  </div>
</template>
  
<script lang="ts" setup>
import { reactive, defineEmits } from 'vue'
import { addPost , getAllTags} from '../service';
import { useUserStore } from '../store/user'

const store = useUserStore()
const emit = defineEmits(['exitAddPost'])
const state = reactive({
  showChoose: false,
  nowimgs: [],
  allTags:[],
  FormData: {
    title: '',
    content: '',
    imgs: [],
    tags: '',
    useId: '6482d82fbb29b98811806325'
  },
})
const chooseBa = async () => {
  state.showChoose = true
  const result = await getAllTags({})
  state.allTags = result.data
  
}
const onClickLeft = () => {
  emit('exitAddPost', false)

}
const onClickRight = async () => {
  if (state.nowimgs.length != 0) {
    for (let i = 0; i < state.nowimgs.length; i++) {
      state.FormData.imgs.push(state.nowimgs[i].content)
    }
  }
  const result = await addPost(state.FormData)
  emit('exitAddPost', false)
}
const chooseBaed = (item)=> {
  state.showChoose = false
  state.FormData.tags = item.name
}
</script>
<style scoped lang="stylus">
.container 
  width 100%
  height 100%
  .header
    height  46px
    width 100%
  .mybody
    height 450px
    width 100%
    .chooseba
      height 20px
      width 100%
  .actions
    display flex
    justify-content space-around
  .chooseBody
    height 65vh
    width 100%
    .item
      width 100%
      height 80px
      display flex
      flex-direction row
      align-items center
      > *
        margin 10px
      img 
        width 50px
        height 50px
        border-radius 10px
</style>
  
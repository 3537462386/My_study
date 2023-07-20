<template>
  <div class="category">
    <div class="search-wrap" ref="searchWrap">

      <div class="nav-side-wrapper">
        <ul class="nav-side">
          <li v-for="sort in state.spacebaData" :key="sort.categoryId" v-text="sort.categoryName"
            @click="selectMenu(sort.categoryId)" :class="{ 'active': state.currentIndex === sort.categoryId }">
          </li>
        </ul>
      </div>

      <div class="search-content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <template v-for="(items, index) in state.spacebaData">
              <div class="swiper-slide" v-if="state.currentIndex === items.categoryId" :key="items.categoryId">
                <div class="category-list" v-for="(all, index) in items.item" :key="index">

                  <div class="items">
                    <img :src="all.img">
                    <div class="items_text">
                      <div class="text_t">{{ all.title }}</div>
                      <div class="text_f">关注&nbsp;{{ all.guanzhu }}&nbsp;帖子&nbsp;{{ all.tiezi }}</div>
                    </div>
                  </div>

                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed, reactive } from 'vue'
import axios from 'axios'

const state = reactive({
  spacebaData: [],
  currentIndex: 100
})

const selectMenu = (index) => {
  // console.log(index, 'select Menu')
  state.currentIndex = index
}

const getSpacebaData = async () => {
  const { data } = await axios.get('https://www.fastmock.site/mock/8908dbc9059bb4aef0952ebe5fd57ab7/tieba/spaceba')
  state.spacebaData = data.data

}

onMounted(async () => {
  await getSpacebaData()
})

</script>

    
<style lang="stylus">
@import '../../common/style/minxin.styl';
*
  margin 0
  padding 0
  box-sizing border-box

body
  font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif 
// 模块化
.category
  .search-wrap
    fj()
    width 100%
    // margin-top 1.3333rem
    background-color #f8f8f8
    .nav-side-wrapper
      width 20%
      height 100vh
      overflow-y: scroll
      .nav-side
        width 100%
        background-color #f8f8f8
        li
          width 100%
          height 40px
          text-align center
          line-height 43px
          font-size 0.3733rem
          &.active
            font-size 0.42rem
            background #fff
            border-left 3px solid blue
    .search-content
      width 80%
      height 100vh
      padding 0 .26667rem
      background-color #fff
      overflow-y: scroll
      .swiper-container
        width 100%
        .swiper-slide
          width 100%
          .category-main-img
            width 100%
          .category-list
            display: flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            width: 100%;
            .items
              display flex
              margin 8px
              img 
                width 45px
                height 45px 
                border-radius 30%
                margin 0  5px
              .items_text
                display flex
                flex-direction column
                justify-content center
                .text_t
                  margin 3px 
                .text_f
                  opacity 0.5
                  margin 3px 
                  transform-origin 0 0 
                  transform scale(0.8,0.8)
</style>

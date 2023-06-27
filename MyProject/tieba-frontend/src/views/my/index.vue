<template>
    <div class="container">
        <div class="header">
            <van-icon name="scan" size="25"/>
            <van-icon name="shop-o" size="25"/>
            <van-icon name="setting-o" size="25"/>
        </div>

        <div class="mycard">
            <img src="https://i.328888.xyz/2023/03/14/9sAZa.jpeg" alt="9sAZa.jpeg" border="0" />   
            <div class="mycard_name">
                <b>肥嘟嘟左卫门</b>
                <div class="mycard_names">关注&nbsp;2&nbsp;&nbsp;粉丝&nbsp;3</div>
            </div>
            <div class="mycard_btn">
                <van-icon name="smile-o" size="18"/>设置形象
            </div>
        </div>

        <div class="mydata">
            <div class="mydata_item">
                <div class="mydata_item_t">9</div>
                <div class="mydata_item_b">我的帖子</div>
            </div>
            <div class="mydata_item">
                <div class="mydata_item_t">33</div>
                <div class="mydata_item_b">关注的吧</div>
            </div>
            <div class="mydata_item">
                <div class="mydata_item_t">15</div>
                <div class="mydata_item_b">收藏</div>
            </div>
            <div class="mydata_item">
                <div class="mydata_item_t">300</div>
                <div class="mydata_item_b">游览历史</div>
            </div>
        </div>

        <div class="mychoose">
            <h3>常用功能</h3>
            <div class="mychoose_items">
                <!-- <div v-for="item in state.chooses" :key="index" class="mychoose_item">
                    <img :src="item.img" >
                    <p>{{ item.text }}</p> -->
                </div>
            </div>
        </div>

        <!-- <div class="myfoot">
            <h3>辅助功能</h3>
            <div class="myfoot_items">
                <div v-for="item in state.foots" :key="index" class="myfoot_item">
                    <img :src="item.img" >
                    <p>{{ item.text }}</p>
                    <van-icon name="arrow"/>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
// import { onMounted, computed, reactive } from 'vue'
// import { usefoot } from '../../store/foot'
// import { usechoose} from '../../store/choose'
// const choosestore = usechoose()
// const footstore = usefoot()
// const state = reactive({
//     chooses: [],
//     foots:[]
// })

// onMounted(async () => {
// //   await choosestore.getchooses()
// //   await footstore.getfoots()
// //   state.chooses = choosestore.choose
// //   state.foots = footstore.foot
// })

</script>

<style lang="stylus" scoped>
.container
    display flex
    flex-direction column
    align-items center
    .header
        display flex
        justify-content flex-end
        width 100vw
        > *
            margin 5px
    .mycard
        width 80vw
        background-image linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)
        display flex
        align-items center
        padding 14px
        border-radius 10px 10px 0 0
        img 
            width 40px
            height 40px
            border-radius 50%
        .mycard_name
            height 40px
            padding 2px 10px
            display flex
            flex-direction column
            justify-content space-around
            flex 1
            .mycard_names
                opacity 0.5
                transform-origin 0 0 
                transform scale(0.8,0.8)
        .mycard_btn
            height 20px
            width 80px
            border-radius 10px
            background-image linear-gradient(to top, #a8edea 0%, #fed6e3 100%)
            color #4169E1
            display flex
            align-items center
            justify-content space-evenly
    .mydata
        display flex
        justify-content space-around
        width 100vw
        background-color white
        .mydata_item
            width 80px
            margin 5px
            .mydata_item_t
                width 80px
                font-size 25px
                text-align center
                margin 5px
            .mydata_item_b
                width 80px
                text-align center
                font-size 12px
                margin 5px
                color #A9A9A9
    .mychoose
        width 87vw
        background-color white
        border-radius 10px  
        margin 10px          
        padding 17px
        .mychoose_items
            display flex
            flex-direction row
            flex-wrap wrap
            justify-content space-evenly
            .mychoose_item
                width 65px
                height 65px
                margin 5px
                display flex
                flex-direction column
                align-items center
                justify-content space-around
                img 
                    width 35px
                    height 35px
    .myfoot
        width 87vw
        background-color white
        border-radius 10px  
        margin 10px          
        padding 17px
        .myfoot_items
            display flex
            flex-direction column
            .myfoot_item
                display flex
                align-items center
                padding 10px 0
                p
                    margin 0 5px
                    flex 1
                img 
                    width 20px
                    height 20px
                    margin 0 5px
</style>
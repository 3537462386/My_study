<template>
    <div class="container">
        <div class="item" v-for="item in state.rsData" :key="item.id">
            <div class="item_id">{{ item.id }}</div>
            <div class="item_m">
                <p>{{ item.text }}</p>
                <img src="https://i.328888.xyz/2023/04/03/ibnoYC.png" alt="ibnoYC.png" border="0" class="img1" />
            </div>
            <div class="item_right">
                <img src="https://i.328888.xyz/2023/04/03/ibtbyF.png" alt="ibtbyF.png" border="0" class="img2" />
                <p>{{ item.num }}W</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed,reactive } from 'vue'
import { getRs } from '../../../service/index'
const state = reactive({
    rsData: [],
})

const getRsData = async () => {
  const { data } = await getRs()
  state.rsData = data

}
onMounted(async () => {
    await getRsData()
})
</script>

<style lang="stylus" scoped>
.container
    width 86vw
    border-radius 10px
    padding 10px
    border 1px solid rgba(0,0,0,.1)
    box-shadow 1px rgba(0,0,0,.5)
    margin 10px
    .item
        display flex
        align-items center
        .item_id
            background-color red
            width 14px
            height 14px
            text-align center
            border-radius 3px
            margin 5px
        .item_m
            display flex
            align-items center
            flex 1
            .img1
                width 14px
                height 14px
                margin 5px
        .item_right
            color #D3D3D3
            display flex
            align-items center
            .img2
                width 14px
                height 14px
                color #D3D3D3
                margin 5px

</style>
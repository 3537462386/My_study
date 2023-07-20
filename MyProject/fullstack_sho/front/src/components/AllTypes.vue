<template>
    <div class="goods-wrap">
      <div class="goods-list">
        <div class="goods-item" @click="gotoDetail(item)" v-for="item in state.goodsData" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <!-- <img src="https://gw.alicdn.com/bao/uploaded/i4/2807173571/O1CN01L5BdEv1cFZ3x5sHLt_!!0-item_pic.jpg_300x300q90.jpg" alt=""> -->
          <div class="content">
            <div class="name">{{ item.name }}</div>
            <div class="desc">
              <span class="price">￥{{ item.price }}</span>
              <span class="min">{{ item.min }}个起批</span>
            </div>
            <div class="shop">{{ item.shop }}</div>
            <div class="address">{{ item.address }}</div>
          </div>
        </div>
      </div>
  
      <div class="goods-list">
        <div class="goods-item" @click="gotoDetail(item)" v-for="item in state.goodsData1" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <!-- <img src="https://img13.360buyimg.com/babel/s580x740_jfs/t1/43429/20/22392/28721/63997c35Ee41242b5/15992ff74dc24a4c.png!cc_290x370.avif" alt=""> -->
          <div class="content">
            <div class="name">{{ item.name }}</div>
            <div class="desc">
              <span class="price">￥{{ item.price }}</span>
              <span class="min">{{ item.min }}个起批</span>
            </div>
            <div class="shop">{{ item.shop }}</div>
            <div class="address">{{ item.address }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { reactive, onMounted } from 'vue';
import axios from '../api/axios';
import { showLoadingToast, closeToast } from 'vant';
import { useRouter } from 'vue-router';
import useGoodsStore  from '../store/goods';
import { watch } from 'vue';

const store = useGoodsStore();

let state = reactive({
    goodsData: [],
    goodsData1: []
})

onMounted(async () => {
    showLoadingToast({ message: '加载中', forbidClick: true, duration:0});
    

    const allgoods = await axios.get('/type');
    state.goodsData = 
        allgoods.data.find(item => item.id === store.state.id).goods
    state.goodsData1 = 
        allgoods.data.find(item => item.id === store.state.id).goods1
    watch(() => store.state.id, (newVal) => {
        state.goodsData =
            allgoods.data.find(item => item.id === newVal).goods
        state.goodsData1 =
            allgoods.data.find(item => item.id === newVal).goods1   
    })
    closeToast();
})

const router = useRouter();
const gotoDetail = (item) => {
    router.push({ path: `/product/${item.id}`})
}
</script>
  
<style lang="less" scoped>
.goods-wrap {
display: flex;
background: #f1f1f1;
border-radius: 5%;
margin-top: 95px;

.goods-list {
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 5%;
    width: 45%;
    height: 45%;
    margin: 0 2.5px;

    .goods-item {
    background: #ffffff;
    margin-bottom: 5px;
    border-radius: 5%;
    overflow: hidden;

    &:nth-last-child(1) {
        margin-bottom: 105px;
    }

    img {
        border-radius: 5%;
        max-width: 100%;
    }

    .content {
        margin: 0 10px;

        .name {
        color: #000000;
        font-size: 12px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        }

        .desc {
        .price {
            color: #ff0000;
            font-size: 15px;
        }

        .min {
            color: #858585;
            font-size: xx-small;
            margin-left: 5px;
        }
        }

        .shop,
        .address {
        color: #858585;
        font-size: xx-small;
        white-space: nowrap;
        overflow: hidden;
        }
    }

    }
}
}
</style>

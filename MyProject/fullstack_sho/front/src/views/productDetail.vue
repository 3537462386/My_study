<template>
    <div class="detail-header">
        <Header title="商品详情" left-arrow @click-left="onClickLeft"/>
    </div>
    <van-swipe>
        <van-swipe-item 
        @click="state.show=true" 
        v-for="(item, index) in state.allImgUrl"
        :key="index"
        >
            <img :src="item" />
        </van-swipe-item>
        <!-- 具名slot 自定义indicator 功能 -->
        <template #indicator="{ active }">
            <div class="custom-indicator">
                {{active + 1}}/{{state.allImgUrl.length}}</div>
        </template>
    </van-swipe>
    <div class="product-wrap">
        <div class="name">{{state.productDetail.name}}</div>
        <div class="price">{{state.productDetail.price}}</div>
        <div class="min">{{state.productDetail.min}}件起批</div>
        <div class="guarantee">{{state.productDetail.guarantee}}</div>

        <div class="seller">
            <i class="iconfont icon-shangpu"></i>
            <div class="seller-desc">
                <div class="shop">{{state.productDetail.shop}}</div>
                <div class="address">{{state.productDetail.address}}</div>
            </div>
            <div class="goseller">
                <van-button plain type="warning" size="mini">进店逛逛</van-button>
            </div>
        </div>
        <div class="smilar-product">
            <div class="title">相似商品</div>
            <GoodsList />
        </div>
        <div class="footer">
            <van-action-bar>
                <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24"/>
                <van-action-bar-icon 
                    @click="gotoCart"
                    :badge="cart.badge?cart.badge:''" 
                icon="chat-o" text="购物车"/>
                <van-action-bar-icon icon="star" text="收藏"/>
                <van-action-bar-button @click="addCart" type="warning"
                 text="加入购物车"/>
                <van-action-bar-button @click="gotoAddCart" type="danger"
                 text="立即购买"/>
            </van-action-bar>
        </div>
    </div>
</template>
<script setup>
import GoodsList from '@/components/GoodsList.vue';
import Header from '@/components/Header.vue';
import { reactive, onMounted } from 'vue';
import axios  from '../api/axios';
import useGoodsStore from '../store/goods';
import { useRouter, useRoute } from 'vue-router';
import useCartStore from '@/store/cart.js'
import { showToast } from 'vant';


const cart = useCartStore();

const route = useRoute();
const router = useRouter();
const store = useGoodsStore();

const gotoCart = () => {
    router.push('/cart');
}

const addCart = async() => {
    const res = await axios.post('/cartAdd', {
        id: state.productDetail.id,
        username: state.userData.username,
        name: state.productDetail.name,
        price: state.productDetail.price,
        max: state.productDetail.max,
        min: state.productDetail.min,
        shop: state.productDetail.shop,
        address: state.productDetail.address,
        guarantee: state.productDetail.guarantee,
        imgUrl: state.productDetail.imgUrl,
        num: state.productDetail.num
    })
    if (res.code === '80000') {
        cart.changeBadge();
        showToast(res.msg);
    }
}

const gotoAddCart = async () => {

}

const onClickLeft = () => {
    window.history.back();
}
const state = reactive({
    allImgUrl: [],
    productDetail: [],
    userData: {},
    show: true
})

onMounted(async () => {
    const { id } = route.params;
    const { data } =
         await axios.post(`/productDetail/${store.state.id}/${id}`)
    state.allImgUrl = data.allImgUrl
    state.productDetail = data
})
</script>
<style lang="less" scoped>
.van-nav-bar {
  background: #f86c35;
}

.detail-header {
  width: 100%;
  position: fixed;
  z-index: 100;
  opacity: 1;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}

.van-swipe-item {
  width: 100%;
  height: 375px;

  img {
    width: 100%;
    display: block;
  }
}

.product-wrap {
  padding: 10px;

  .name {
    font-size: 17px;
    margin-bottom: 10px;
  }

  .price {
    color: #ff0000;
    font-size: 20px;
    display: inline-block;
    margin-right: 10px;
  }

  .min {
    color: #858585;

  }

  .guarantee {
    margin-top: 10px;
  }

  .seller {
    margin-top: 10px;
    position: relative;
    border-top: 1px solid #dfdfdf;

    .icon-shangpu {
      color: #f86c35;
      font-size: 38px;
    }

    .seller-desc {
      display: inline-block;
      margin-left: 10px;

      .shop {
        font-size: 14px;
        font-weight: 700;
      }

      .address {
        font-size: 10px;
        color: #858585;
      }
    }

    .goseller {
      position: absolute;
      right: 0;
      top: 15px;
    }
  }
}

.smilar-product {
  border-top: 10px solid #dfdfdf;

  .title {
    font-size: 15px;
    margin: 5px 10px;
  }
}

.footer {
  position: fixed;
  bottom: 0;
}

</style>

<template>
    <HomeHeader/>
    <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
        <div class="content">
            <AllTypes v-if="selectId != 0"/>
            <div v-else>
                <!-- 幻灯片 banner -->
                <van-swipe :autoplay="3000" lazy-render>
                    <van-swipe-item v-for="image in images" :key="image">
                        <img :src="image" alt=""/>
                    </van-swipe-item>
                </van-swipe>
                <!-- 中间导航 -->
                <ul class="nav-content">
                    <li class="nav-item" v-for="item in menuList" :key="item.categoryId">
                        <img :src="item.imgUrl" alt="">
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
                <!-- 图片导航 -->
                <div class="image-wrap" ref="imageWrap">
                    <ul class="image-content">
                        <li class="image-item" v-for="item in imageList" :key="item.categoryId">
                            <div class="img-color">
                                <img :src="item.imgUrl" alt="">
                                <div class="color" :style="`background:${item.background}`"></div>
                            </div>
                            <div class="img-desc">
                                <span>义务国际商贸城</span>
                                <span>{{ item.area }}</span>
                                <div class="smalltext">{{ item.content }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 商品列表 -->
                <GoodsList/>
            </div>
        </div>
    </van-pull-refresh>
    <div class="footer">
        <Footer/>
    </div>
</template>
<script setup>
import BetterScroll from 'better-scroll';
import { reactive, ref, onMounted, watch, nextTick } from 'vue';
import useGoodsStore from '../store/goods';
import HomeHeader from '@/components/HomeHeader.vue';
import AllTypes from '@/components/AllTypes.vue';
import Footer from '@/components/Footer.vue';
import GoodsList from '@/components/GoodsList.vue';

const imageWrap = ref(null);

const images = [
    'https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000268/100040977556/FocusFullshop/CkRqZnMvdDEvMTYyMDMzLzIzLzM3Mjk2LzExOTYwOS82NGE0Y2NkYkZlMzZkNzNkZi8xNGVjZjkzYjZiNDFiY2RhLmpwZxILNTE3LXR5XzBfODkwATiMi3pCGgoW576O55qE57ue6IKJL-WIh-iPnOacuhABQhYKEuW8gOWQr-eyvuiHtOeUn-a0uxACQhAKDOeri-WNs-aKoui0rRAGQgoKBui2heWAvBAHWJTZoNf0Ag/cr_1125x449_0_166/s/q70.jpg',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/126235/23/37112/81674/64a8513fFf6ba1e0c/6edadcc8067e1214.jpg!cr_1125x449_0_166!q70.jpg'
];

const menuList =
  [
    {
      name: '限时秒杀',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
      categoryId: 100001
    }, {
      name: '尾货清仓',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
      categoryId: 100003
    }, {
      name: '热卖',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
      categoryId: 100002
    }, {
      name: '订货通',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
      categoryId: 100004
    }, {
      name: '动态',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
      categoryId: 100005
    }, {
      name: '充值缴费',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
      categoryId: 100006
    }, {
      name: '9.9元拼',
      imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
      categoryId: 100007
    }, {
      name: '领劵',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
      categoryId: 100008
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100009
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100010
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100011
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100012
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100011
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100012
    }
  ]

const store = useGoodsStore();
let selectId = ref(0);
const state = reactive({
    refreshing: false,
    loading: false
})
onMounted(async () => {
    watch(() => store.state.id, (newVal) => {
        // console.log('//.///////', newVal);
        selectId.value = newVal;
    })
})
const onRefresh = async () => {
    console.log('刷新');
    state.refreshing = true;
    await window.location.reload();
    state.refreshing = false;
}

const imageList =
  [
    {
      area: '一区',
      content: '玩具，装饰工艺',
      imgUrl: '../src/assets/images/2.png',
      background: 'linear-gradient(100deg, rgb(38, 161, 202) 10px, rgb(99, 178, 205) 20px, rgb(160, 217, 233) 100px)'
    }, {
      area: '一区东',
      content: '各种饰品，饰品配件',
      imgUrl: '../src/assets/images/3.png',
      background: 'linear-gradient(100deg, rgb(255, 29, 108) 10px, rgb(206, 14, 56) 20px, rgb(230, 110, 122) 100px)'

    }, {
      area: '二区',
      content: '箱包，钟表，小家电',
      imgUrl: '../src/assets/images/4.png',
      background: 'linear-gradient(100deg, rgb(11, 178, 139) 10px, rgb(8, 171, 149) 20px, rgb(134, 237, 197) 100px)'
    }, {
      area: '二区东',
      content: '家装五金，新能源',
      imgUrl: '../src/assets/images/5.png',
      background: 'linear-gradient(100deg, rgb(230, 146, 20) 10px, rgb(228, 165, 47) 20px, rgb(241, 213, 147) 100px)'
    }
  ]

nextTick(() => {
    new BetterScroll(imageWrap.value, {
        click: true,
        scrollX: true,
        scrollY: false,
        probeType: 3
    })
})
</script>
<style lang="less" scoped>
.van-swipe-item {
  width: 100%;
  margin-top: 90px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.nav-content {
  width: 100%;
  height: 140px;
  display: flex;
  flex-flow: column wrap;
  overflow-x: auto;
  background: #f1f1f1;

  .nav-item {
    width: 65px;
    height: 70px;
    text-align: center;
    padding: 8px 8px;

    img {
      width: 36px;
      height: 36px;
    }

    span {
      display: block;
    }
  }
}

::-webkit-scrollbar {
  display: none
}

.image-wrap {
  width: 100vw;
  height: 87px;
  background: #f1f1f1;
  white-space: nowrap;
  overflow: hidden;

  .image-content {
    display: inline-block;

    .image-item {
      display: inline-block;
      font-size: 13px;
      color: #ffffff;
      padding: 8px 8px;

      .img-color {
        width: 130px;
        height: 70px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 8%;
          z-index: 1;
        }

        .color {
          width: 100%;
          height: 100%;
          opacity: 0.7;
          z-index: 3;
          border-radius: 8%;
          margin-top: -76px;
        }
      }

      .img-desc {
        position: absolute;
        top: 12px;
        left: 22px;
        z-index: 5;
        font-size: 14px;

        span {
          display: block;
          font-weight: 800;
        }

        .smalltext {
          font-size: 5px;
          font-weight: 800;
        }
      }
    }
  }

}



.footer {
  position: fixed;
  bottom: 0;
}
</style>

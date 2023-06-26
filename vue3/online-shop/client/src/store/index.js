import Vue from "vue";
import Vuex from 'vuex'
import { manufacturerActions, productActions } from './actions'
import { productMutations , manufacturerMutations } from './mutations'
import {
  productGetters
} from './getters'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        cart:[],    //购物车
        showLoader:false,   //loading
        product:{},     // 选中的商品 详情
        products:[ 
        ],    // 商品列表
        manufacturers:[]    //品牌列表
    },
    mutations:{
      ...productMutations,
      ...manufacturerMutations
    },
    actions:{
      ...productActions,
      ...manufacturerActions
    },
    getters:[
      ...productGetters
    ]
})
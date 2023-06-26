<template>
    <div>
        <div class="products">
            <div class="container">
                this is productlist
            </div>
            <product-item :products="products">

            </product-item>
            <!-- <template v-for="product in products">
                <div class="product">
                    <p class="product__name">产品名称：{{ product.name }}</p>
                    <p class="product__description">介绍：{{ product.description }}</p>
                    <p class="product__price">价格：{{ product.price }}</p>
                    <p class="product.manufacturer">生产厂商：{{ product.manufacturer }}</p>
                    <img :src="product.image" alt="" class="product__image">
                    <button @click="addToCart(product)">加入购物车</button>
                </div>
            </template> -->
        </div>
    </div>
</template>
<script>
import ProductItem from './ProductItem.vue'
export default {
    name: "product-list",
    created() {
        if (this.products.length === 0) {
            this.$store.dispatch('allProducts')
        }
    },
    computed: {
        products() { // reactive 
            return this.$store.state.products // []
        }
    },
    methods: {
        addToCart(product) {
            this.$store.commit('ADD_TO_CART', {
                product
            });
        }
    },
    components:{
        "productItem":ProductItem
    }
}
</script>
<style scoped>
.product {
    border-bottom: 1px solid black;
}
.product__image {
    height: 100px;
    width: 100px;
}
</style>
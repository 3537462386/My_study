<template>
    <div> 
        <el-button v-if="isAdding" @click="addToCart" type="text" size="small">
            加入购物车
        </el-button>
        <el-button v-else @click="removeFromCart(id)" type="text" size="small">从购物车中移除</el-button>
    </div>
</template>
<script>

export default {
    props: ['id'],
    computed: {
        product() {
            let product = this.$store.getters.allProducts.find(
                product => product.id === this.id
            )
            return product
        },
        isAdding() {
            let isAdding = true
            // 购物车 vuex 的检测
            return isAdding
        }
    },
    methods: {
        addToCart() {

        },
        removeFromCart() {
            
        }
    },
}
</script>
<style scoped>

</style>
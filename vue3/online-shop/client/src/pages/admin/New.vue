<template>
    <product-form 
        :model="model"
        :manufacturers="manufacturers"
        @save-product="addProduct"
    >
    </product-form>
</template>
<script>
import ProductForm from '@/components/products/ProductForm.vue';

export default {
    data() {
        return {
            model: {},
            manufacturers: [
                {
                    _id: 'xm',
                    name: '小米'
                },
                {
                    _id: 'apple',
                    name: '苹果'
                }
            ]
        }
    },
    methods: {
        addProduct(model) {
            console.log('model', model)
        }
    },
    components: {
        'product-form': ProductForm
    } 
}
</script>
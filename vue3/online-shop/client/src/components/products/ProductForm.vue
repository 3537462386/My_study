<template>
    <form @submit.prevent="saveProduct">
        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div class="form-group">
                <label>Name</label>
                <input 
                    type="text"
                    placeholder="Name"
                    v-model="model.name"
                    name="name"
                    class="form-control"
                >
            </div>
            <div class="form-group">
                <label>Price</label>
                <input 
                    type="number"
                    placeholder="Price"
                    v-model="model.price"
                    name="price"
                    class="form-control"
                >
            </div>
            <div class="form-group">
                <label>Manufacturer</label>
                <select 
                type="text"
                class="form-control"
                v-model="model.manufacturer"
                name="manufacturer">
                    <template v-for="manufacturer in manufacturers">
                        <option :value="manufacturer._id" 
                        :selected="manufacturer._id == (
                            model.manufacturer && model.manufacturer._id)">
                        {{manufacturer.name}}
                        </option>
                    </template>
                </select>
            </div>
            <div class="form-group">
                <label>Image</label>
                <input 
                    type="text"
                    placeholder="Image"
                    v-model="model.image"
                    name="image"
                    class="form-control"
                >
            </div>
            <div class="form-group">
                <label>Description</label>
                <input 
                    type="text"
                    placeholder="Description"
                    v-model="model.description"
                    name="description"
                    class="form-control"
                >
            </div>
            <div class="form-group new-button">
                <button class="button">
                    <i class="fa fa-pencil"></i>
                    <span v-if="isEditing">Update Product</span>
                    <span v-else>Add Product</span>
                </button>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    props: ['model', 'manufacturers', 'isEditing'],
    methods: {
        saveProduct() {
            this.$emit('save-product', this.model)
        }
    }
}
</script>
<style scoped>
</style>
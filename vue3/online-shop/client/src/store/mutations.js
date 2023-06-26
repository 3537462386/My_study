import {
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS
} from './mutation-types'

export const productMutations = {
    [ALL_PRODUCTS](state) {
        state.showLoader = true
    },
    [ALL_PRODUCTS_SUCCESS](state,payload){
        const { products } = payload
        state.showLoader = false
        state.products = products
    }
}
export const manufacturerMutations = {

}
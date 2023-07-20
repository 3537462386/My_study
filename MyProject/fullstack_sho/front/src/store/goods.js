import { defineStore } from 'pinia';
import { reactive } from 'vue';

// pinia 的早期语法
// const useGoodsStore = defineStore('goods', {
//     state: () => {
//         return {
//             id: 0
//         }
//     },
//     actions: {
//         changeId(id) {
//             this.id = id
//         }
//     }
// })

const useGoodsStore = defineStore('goods', () => {
    const state = reactive({
        id: 0
    });
    
    
    const changeId = (id) => {
          state.id = id;
    }
    
    return {
        state,
        changeId
    }
})

export default useGoodsStore;
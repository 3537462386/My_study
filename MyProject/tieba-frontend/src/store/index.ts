import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

interface StoreState {
    showAddPost: Ref<boolean>
    userId: Ref<string>
    token: Ref<string>
}

export const useStore = defineStore('allStore', () => {
    const state: StoreState = {
        showAddPost: ref(false),
        userId: ref(''),
        token: ref('')
    }

    // 检查 localStorage 是否含有 token
    if (localStorage.getItem('tiebatoken')) {
        // 如果存在 token，则从 localStorage 中取出
        state.token.value = localStorage.getItem('tiebatoken')!
        // 在这里对 token 进行后续操作
    }

    return {
        ...state
    }
})

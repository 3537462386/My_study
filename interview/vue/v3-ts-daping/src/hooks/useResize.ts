import { handleError, onMounted, onUnmounted } from "vue";
// 窗口缩放 three.js 重绘 renderer.render()
// @param handlerFn 回调函数
// @param immediate 立即调用
export function useResize<T = any >(
    handleFn: () => T,
    immediate:boolean = true
) {
    const handler = () => {
        handler()
    }
    onMounted(()=> {
        window.addEventListener('resize',handler)
        immediate && handler()
    })
    onUnmounted(() => {
        window.removeEventListener('resize',handler)
    })
}
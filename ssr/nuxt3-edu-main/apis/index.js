// 首页接口 《-统一的接口
// hooks 自动被找到
export function useIndexDataApi() {
    //通用方法  请求拦截  -> useFetch
    return useHttpGet('IndexData',"/index",{
        lazy:true
    })
}
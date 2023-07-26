import axios from 'axios';
import config from './config.js';
// import qs from 'qs';
// import { useUserStore } from '../store/user'
// const useStore = useUserStore()

function $axios(options: any) {
    return new Promise((resolve, reject) => {
        // 创建一个请求
        const instance = axios.create({
            baseURL: config.baseUrl,
            headers: {}
        })

        // 请求拦截-->接收两个回调函数
        // instance.interceptors.request.use(
        // 	(conf:any) => { //不报错
        // 	const token = useStore.user.token
        // 	conf.headers.authorization = token
        // 		// 携带token给后端
        // 		// if (config.method.toLocaleLowerCase() === 'post' || config.method.toLocaleLowerCase() ===
        // 		// 	'delete' || config.method.toLocaleLowerCase() === 'put') {
        // 		// 	// 序列格式化
        // 		// 	conf.data = qs.stringify(conf.data)
        // 		// }
        // 	return conf
        // 	},
        // 	error => { //报错
        // 		console.log(error);
        // 	}
        // )

        // 响应拦截--->接收两个回调函数
        instance.interceptors.response.use(
            response => { //业务逻辑代码错误				
                const data = response.data
                // switch (data.code) {
                //     case 0:
                //         let mess = data.msg || 'error'
                //         message.error({
                //             content: mess,
                //             duration: 1000
                //         })
                //         return Promise.reject(mess)
                //     default:
                // }
                return data
            },
            // error => { //服务端错误
            //     console.log(error, '////////////////////////////////');

            //     if (error && error.response) {
            //         switch (error.response.status) {
            //             case 400:
            //                 error.mess = '请求错误'
            //                 break
            //             case 401:
            //                 error.mess = '请先登录'
            //                 break
            //             case 404:
            //                 error.mess = 'NOT FOUND'
            //                 break
            //             default:
            //         }
            //     }
            //     return Promise.reject(error)
            // }
        )

        // 发请求		
        instance(options)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default $axios

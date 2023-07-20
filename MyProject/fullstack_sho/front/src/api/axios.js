import axios from 'axios';
import { showFailToast } from 'vant';
// 后端接口地址
axios.defaults.baseURL = 'http://localhost:3000/';
//get 默认的是json post 不是 
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 响应拦截
axios.interceptors.response.use(res => {
    if (res.status !== 200) {
        showFailToast('服务器异常');
    } else {
        if (res.data.code !== '80000') {
            showFailToast(res.data.msg)
            return
        }
        return res.data
    }
})

export default axios

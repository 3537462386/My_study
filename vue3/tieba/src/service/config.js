import axios from 'axios'

 axios.defaults.baseURL = 'https://www.fastmock.site/mock/8908dbc9059bb4aef0952ebe5fd57ab7/tieba'

axios.interceptors.response.use((res) => {

    return res.data
})

export default axios
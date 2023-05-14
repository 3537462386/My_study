import axios from "./config.js"

export const gettuijian = () => {
   return axios.get('/tuijian')
}

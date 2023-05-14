import axios from "./config.js"

export const getspaceba = () => {
   return axios.get('/spaceba')
}

import axios from "./config.js"

export const getfoot= () => {
   return axios.get('/foot')
}

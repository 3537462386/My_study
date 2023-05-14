import axios from "./config.js"

export const getchoose= () => {
   return axios.get('/choose')
}

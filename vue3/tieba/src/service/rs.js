import axios from "./config.js"

export const getrs= () => {
   return axios.get('/rs')
}



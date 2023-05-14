import {ref,Ref} from 'vue'
import {defineStore} from 'pinia'

type Product = {
    id:number;
    title:string;
    price:string;
    description:string;
    category:string;
    image:string;
}



export const useProductStore = defineStore('products',()=>{

    const all= ref([])
    // actions 
    const fetchAll = async () => {
        const res = await fetch(`http://172.22.219.45:8089/item/getAll`)
        const data =await res.json()
        all.value = data
    }

    return {
        all,
        fetchAll
    }
})
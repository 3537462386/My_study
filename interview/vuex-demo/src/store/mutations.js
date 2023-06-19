import { RECORD_ADDRESS  } from "./mutation_types"
export default {
    [RECORD_ADDRESS](state,{
        latitude,
        longitude
    }){
        state.latitude = latitude
        state.longitude = longitude
    }
}
import{ CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constants"
export default function MaincategoryReducer(state=[],action) {
    switch (action.type) {
       case CREATE_MAINCATEGORY_RED:
        let newState=[...state]
        newState.push(action.payload)
        return newState

        case GET_MAINCATEGORY_RED:
            return action.payload

        case UPDATE_MAINCATEGORY_RED:
            let index= state.findIndex((x)=>x.id===action.payload)
            state[index]=action.payload.name
            state[index]=action.payload.pic
            state[index]=action.payload.active
            return state

        case DELETE_MAINCATEGORY_RED:
            return state.filter((x)=>x.id!==action.payload)    
    
        default:
            return state
          
    }
}
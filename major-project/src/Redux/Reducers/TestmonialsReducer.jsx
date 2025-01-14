import{ CREATE_TESTMONIALS_RED, DELETE_TESTMONIALS_RED, GET_TESTMONIALS_RED, UPDATE_TESTMONIALS_RED } from "../Constants"
export default function TestmonialsReducer(state=[],action) {
    switch (action.type) {
       case CREATE_TESTMONIALS_RED:
        let newState=[...state]
        newState.push(action.payload)
        return newState

        case GET_TESTMONIALS_RED:
            return action.payload

        case UPDATE_TESTMONIALS_RED:
            let index= state.findIndex((x)=>x.id===action.payload)
            state[index].name=action.payload.name
            state[index].pic=action.payload.pic
            state[index].message=action.payload.message
            state[index].active=action.payload.active
            return state

        case DELETE_TESTMONIALS_RED:
            return state.filter((x)=>x.id!==action.payload)    
    
        default:
            return state
          
    }
}
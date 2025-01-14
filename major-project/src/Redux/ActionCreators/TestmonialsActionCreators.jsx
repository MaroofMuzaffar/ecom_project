import { CREATE_TESTMONIALS, DELETE_TESTMONIALS, GET_TESTMONIALS, UPDATE_TESTMONIALS } from "../Constants";

export function createTestmonials(data) {
    return{
        type :CREATE_TESTMONIALS,
        payload:data
        
    }
}
export function getTestmonials() {
    return{
        type :GET_TESTMONIALS  
        
    }
}
export function updateTestmonials(data) {
    return{
        type :UPDATE_TESTMONIALS,
        payload:data   
        
    }
}
export function deleteTestmonials(data) {
    return{
        type :DELETE_TESTMONIALS, 
        payload:data   
        
    }
}
import { DELETE_REQUEST_SUCESS, GET_REQUSET_FAILURE, GET_REQUSET_LOADING, GET_REQUSET_SUCESS } from "./actionTypes";

const initialState ={
    isLoading: false,
    isError: false,
    books: [],
  }

export const reducer =(state=initialState,{type,payload})=>{
switch (type) {
    case GET_REQUSET_LOADING: {
        return {...state,isLoading : true}
    }
    case GET_REQUSET_SUCESS: {
        return {...state,isLoading : false,books:payload}
    }
    case DELETE_REQUEST_SUCESS: {
        return {...state,isLoading : false,books:payload}
    }
    case GET_REQUSET_FAILURE: {
        return {...state,isLoading : false,isError:true}
    }

    default: return state
}
}

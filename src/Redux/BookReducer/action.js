import axios from "axios";
import { DELETE_REQUEST_FAILURE, DELETE_REQUEST_LOADING, GET_REQUSET_FAILURE, GET_REQUSET_LOADING, GET_REQUSET_SUCESS } from "./actionTypes";

export const getBooks =(paramsObj)=> (dispatch) => {
  // console.log(paramsObj)
  dispatch({type:GET_REQUSET_LOADING})
  axios.get("https://63f45eca3f99f5855dae29dc.mockapi.io/products",paramsObj)
  
  .then((res)=>{
    // console.log("res",res.data)
    dispatch({type:GET_REQUSET_SUCESS,payload:res.data})
  })
  .catch((err)=>{
    dispatch({type:GET_REQUSET_FAILURE})

  })
};
// https://63f45eca3f99f5855dae29dc.mockapi.io/products
export const editBook = () => {
  // Write logic here
};

export const deleteReq = (id) =>(dispatch)=> {
  // Write logic here
  dispatch({type:DELETE_REQUEST_LOADING})
 return  axios.delete(`https://63f45eca3f99f5855dae29dc.mockapi.io/products/${id}`)
 .then((res)=>{
  // console.log(res.data)

 })
 
  .catch((err)=>{
    console.log(err)
    dispatch({type:DELETE_REQUEST_FAILURE})
  })

};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}

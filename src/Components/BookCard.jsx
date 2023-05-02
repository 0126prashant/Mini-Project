import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteReq, getBooks } from "../Redux/BookReducer/action";

export const BookCard = ({id,images,category,color,maxPrice,minPrice,name,price}) => {
  // console.log(id,images,category,color,maxPrice,minPrice,name,price)
const dispatch= useDispatch();

  const handleClick =(id)=>{
  //  console.log(id)
   dispatch(deleteReq(id)).then((res)=>{
    dispatch(getBooks({}))
   })
  }

  return (
    <div className="book-card" style={{border:"2px solid grey"}}>
      <img style={{width:"200px"}} src={images} />
      <h2>{name}</h2>
      <p>{category}</p>
      {/* <p>{color}</p> */}
      <p>{price}</p>
      <button>{<Link to={"/edit-book/:id"}>Edit</Link>}</button>
      <button onClick={() =>handleClick(id)}>Delete</button>
      </div>
  );
};


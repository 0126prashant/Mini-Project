import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/BookReducer/action";
import {BookCard} from "./BookCard"
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";


export const BookList = () => {
  const {books,isLoading,isError} = useSelector((store)=>{
    return {
      books:store.bookReducer.books,
      isLoading:store.bookReducer.isLoading,
      isError:store.bookReducer.isError,
    }
  });
  const [searchParams,setsearchParam] = useSearchParams()
  const location = useLocation()
  // console.table(books) 
  // console.log(books) //,isLoading,isError
  // console.log(params)
  // console.table(books)
  const dispatch = useDispatch();

  // console.log(searchParams.getAll("category"))

  let paramsObj = {
    params:{
      category:searchParams.getAll("category"),
      _sort:searchParams.get("order") && "price",
      _order:searchParams.get("order")
    }
  }
  useEffect(()=>{
    dispatch(getBooks(paramsObj))
  },[location.search])

  return (
   
    <DIV data-testid="book-list">
    {isLoading && <h1>Loading.....</h1>}
      {/* Map through books using BookCard component */}
      { books.length>0 && books.map((ele)=>{
        return   <BookCard key={ele.id} {...ele}   />
       
         {/* <div key={ele.id}>
              <h2>{ele.special}</h2>
              <h2>{ele.name}</h2>
              <img style={{width:"100px"}} src={ele.images} alt=""/>
          </div> */}
      {/* <BookCard props={ele.name}  /> */}
      })}



    {isError && <h1>There Is Some Error</h1>}
    </DIV>
  );
};
const DIV = styled.div`
margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

`;
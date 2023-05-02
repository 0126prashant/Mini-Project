import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getBooks } from "../Redux/BookReducer/action";

export const Navbar = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const [qry,setQry] = useState( initialCategory || "")
  const dispatch = useDispatch()

  // console.log(initialCategory)
  // console.log(qry)
  let paramObj = {
    params :{
      q:qry && qry
    }
  }
  useEffect(()=>{
   dispatch(getBooks(paramObj))
  },[qry])
  return (
    <DIV>
      <h2>Book Store</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <input placeholder="Search product"
        onChange={(e)=>setQry(e.target.value)}  />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
`;

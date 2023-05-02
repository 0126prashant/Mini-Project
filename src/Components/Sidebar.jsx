import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import { getBooks } from "../Redux/BookReducer/action";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GET_REQUSET_SUCESS } from "../Redux/BookReducer/actionTypes";

export const Sidebar = () => {
  const [searchParams,setsearchParam] = useSearchParams();
  const initialCategory = searchParams.getAll("category")
  const initialSort = searchParams.get("order")
  const [category,setCategory] = useState( initialCategory || [])
  const [order,setOrder] = useState(initialSort || "")
  // console.log(searchParams,"initial")

  // console.log(category)
  useEffect(()=>{
    let params ={
      category,
    }
   order &&  (params.order = order )
    setsearchParam(params)

  },[category,order])
 
  const handleChange =(e)=>{
    let {value} = e.target
    let newCategoryArr = [...category]
    if(newCategoryArr.includes(value)){
      newCategoryArr =  newCategoryArr.filter((ele) => ele !== value)
    }
    else {
      newCategoryArr.push(value)
    }
    setCategory(newCategoryArr)
  }

  const handleSortChange = (e)=>{
    const {value} = (e.target)
    setOrder(value)
  }
  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input data-testid="novel-filter" type="checkbox" value={"hoodie"}  onChange={handleChange}
          checked={category.includes("hoodie")}
        />
        <label>hoodie</label>
        <br />
        <input
          data-testid="science-fiction-filter"
          type="checkbox"
          value={"tshirt"} onChange={handleChange}
          checked={category.includes("tshirt")}
        />
        <label>Tshirt</label>
        <br />
        <input
          data-testid="thriller-filter"
          type="checkbox"
          value={"pants_shorts"} onChange={handleChange}
          checked={category.includes("pants_shorts")}
        />
        <label>pants_shorts</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Release Year</h3>
      <div onChange={handleSortChange}>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} defaultChecked={order=="asc"}/>
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={order=="desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 35%;
  border-right: 1px solid gray;
`;

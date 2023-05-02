import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import {EditBook} from "./EditBook"
import {Login} from "./Login"
export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/edit-book/:id" element={<EditBook/>} />
    <Route path="/login" element={<Login/>} />
  </Routes>;
};

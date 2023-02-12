import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./components/Profile/Profile";
import Brand from "./components/Brands/Brand";
import Content from "./components/Content/Content";
import Detail from "./components/Detail/Detail";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      
        <Routes>
          <Route
            path="/"
            element={[<Profile />, <Brand />, <Content />]}
          ></Route>
          <Route path="/campaign/:seoName/:Id" element={<Detail />}></Route>
        </Routes>
     
    </div>
  );
}

export default App;


import React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./home";
import SingleShow from "./SingleShow";
import "./App.css";
import Error from "./Error";
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleShow />} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>
   
  );
};

export default App;

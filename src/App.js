import React from "react";
import "./style.css";
import Header from "./components/common/Header"
import Footer from "./components/common/footer/Footer"
import Home from './components/pages/home/Home'
import {BrowserRouter } from "react-router-dom"

export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Home/>
          <Footer/>
         
      </BrowserRouter>

    </div>
  );
}

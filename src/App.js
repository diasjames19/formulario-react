import './App.css';
import { Template } from './components/MainComponents'
import Header from './components/Partials/Header';
import { BrowserRouter} from "react-router-dom";
import Routes from './Router/Routes';
import React from "react";


const Page = ()=> {  
  return (
    <BrowserRouter>
      <Template>
            <Header/>
            <Routes/>
      </Template>
    </BrowserRouter>
  )
}

export default Page;

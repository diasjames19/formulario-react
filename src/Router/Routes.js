import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Cadastro from '../pages/cadastro';


export default() =>{

    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
       </Routes>
    )


}
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Cadastro from '../pages/cadastro';
import NotFound from '../pages/notFound';
import Signin from '../pages/signin';
import Signup from '../pages/signup';



export default() =>{

    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/cadastro" element={<Cadastro/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/signin" element={<Signin/>}/>
            <Route path="*" element={<NotFound/>}/>
       </Routes>
    )


}
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "../../../Router/Routes";



const Header = ()=>{
    return(
        <div>
             <h1>Minha Aplicação de CRUD</h1>
             <BrowserRouter>
                <Nav variant="pills"> 
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" eventKey="/">Pagina Inicial</Nav.Link>
                    </Nav.Item>
                   <Nav.Item>
                   <    Nav.Link as={Link} to="/cadastro" eventKey="/cadastro">Cadastros</Nav.Link>
                   </Nav.Item>
                </Nav>
                <Routes/>
             </BrowserRouter>
        </div>
    )
}

export default Header;
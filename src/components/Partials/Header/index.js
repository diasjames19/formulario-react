import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "../../../Router/Routes";



const Header = ()=>{
    return(
        <div>
             <h1>Solicitação de Ordem de Serviço</h1>
             <BrowserRouter>
                <Nav variant="pills"> 
                    <Nav.Item size="sm">
                        <Nav.Link as={Link} to="/" eventKey="/">Pagina Inicial</Nav.Link>
                    </Nav.Item>
                   <Nav.Item size="sm">
                   <    Nav.Link as={Link} to="/cadastro" eventKey="/cadastro" >Cadastros</Nav.Link>
                   </Nav.Item>
                </Nav>
                <Routes/>
             </BrowserRouter>
        </div>
    )
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu=()=>{
    return(
        <div>
        <Nav variant="pills"> 
            <Nav.Item size="sm">
                <Nav.Link as={Link} to="/" eventKey="/">Pagina Inicial</Nav.Link>
            </Nav.Item>
           <Nav.Item size="sm">
           <Nav.Link as={Link} to="/cadastro" eventKey="/cadastro" >Cadastros</Nav.Link>
           </Nav.Item>
        </Nav>
        </div>
       

    );
}
export default Menu;
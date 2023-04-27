import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from './styled';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { isLogged } from '../../../helpers/AuthHandler'


const Header = ()=>{
    let logged = isLogged();

    return(
        <HeaderArea>
            <div className="container">
                <div className="title">
                    <h1>API</h1>
                </div>
                <Nav  className="justify-content-end">  
                        
                            {logged &&
                                <>
                                        <Nav.Item size="sm">
                                            <Nav.Link as={Link} to="/my-account" eventKey="/my-account">Minha Conta</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item size="sm">
                                            <Nav.Link as={Link} to="/logout" eventKey="/logout" >Sair</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item size="sm">
                                            <Nav.Link as={Link} to="/post-sol-ad" eventKey="/post-sol-ad"><Button variant="primary" size="sm">Criar Ordem</Button></Nav.Link>
                                        </Nav.Item>
                                </>
                            }
                            {!logged &&
                                <>
                                     <Nav.Item size="sm">
                                            <Nav.Link as={Link} to="/signin" eventKey="/signin">Login</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item size="sm">
                                            <Nav.Link as={Link} to="/signup" eventKey="/signup" ><Button variant="primary" size="sm">Registar</Button></Nav.Link>
                                        </Nav.Item>
                                </>
                            }
                            
                </Nav>
              
            </div>
        </HeaderArea>
    )
}

export default Header;
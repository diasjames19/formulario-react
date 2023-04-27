import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 const  Page =()=>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Cadastro Geral</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr/>
      teste
        </div>
    );

}
export default Page;
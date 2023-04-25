import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dados from '../../components/DadosTable'


const  Page=()=>{
    return(
        <div>
           <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>DASHBOARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Digite sua buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Pesquisa</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr/>
    <Dados/>
        </div>
    );

}

export default Page;
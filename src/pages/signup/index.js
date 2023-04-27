import React from "react";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Page=()=>{

    return(

        <PageContainer>
            <PageTitle>Registro</PageTitle>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Função</Form.Label>
                            <Form.Control type="email" placeholder="Função" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Função Login</Form.Label>
                            <Form.Control type="email" placeholder="Login" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="senha" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Registrar
                    </Button>
                </Form>
        </PageContainer>
    );


}
export default Page;
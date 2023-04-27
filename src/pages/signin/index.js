import React from "react";
import { PageContainer, PageTitle } from "../../components/MainComponents";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Page=()=>{

    return(

        <PageContainer>
            <PageTitle>Login</PageTitle>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Usuario" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Lembrar-me" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Fazer Login
                    </Button>
                </Form>
        </PageContainer>
    );


}
export default Page;
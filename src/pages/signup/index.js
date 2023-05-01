import React,{ useEffect, useState } from "react";
import { 
        PageContainer, 
        PageTitle, 
        ErrorMessage } from "../../components/MainComponents";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { doLogin } from "../../helpers/AuthHandler";
import useApi from '../../helpers/ConfigApi';


const Page=()=>{ 

    const api = useApi();

    const [funcao, setFuncao] = useState('');
    const [login, setlogin] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError]=useState('');
    useEffect(()=>{

    },[])
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setDisabled(true);
        setError('');
        if(password !== confirmPassword){
            setError('Senhas são diferentes');
            setDisabled(false);
            return;

        }
        const json = await api.register({
            funcao,
            login,
            password
        });
        if(json.error){
            setError(json.error);
        }else{
            doLogin(json.token);
            window.location.href = '/'

        }
            setDisabled(false);
    }
    return(
   
        <PageContainer>
            <PageTitle>Registro</PageTitle>
                {error &&
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>
                
                }
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                            <Form.Label>Função</Form.Label>
                            <Form.Control  
                                    type="text"
                                    disabled={disabled}
                                    value={funcao} 
                                    onChange={e=> setFuncao(e.target.value)}
                                    required
                                    placeholder="Função" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                            <Form.Label> Login</Form.Label>
                            <Form.Control  
                            type="text" 
                            disabled={disabled}
                            value={login} 
                            onChange={e=> setlogin(e.target.value)} 
                            required
                            placeholder="Login" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                         type="password"
                         disabled={disabled}
                         value={password} 
                         onChange={e=> setPassword(e.target.value)}
                         required
                         placeholder="senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Confirmar Senha</Form.Label>
                        <Form.Control id="senha" type="password"
                        disabled={disabled}
                        value={confirmPassword} 
                        onChange={e=> setconfirmPassword(e.target.value)}
                        required
                        placeholder="confimar senha" />
                    </Form.Group>
                    <Button variant="success" disabled={disabled} type="submit">
                        Registrar
                    </Button>
                </Form>
        </PageContainer>
        
    );
}
export default Page;
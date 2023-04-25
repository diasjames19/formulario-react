import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Dados=()=>{

//
    return(
<>
            <Table striped bordered haver>
                <thead>
                    <tr>
                        <th>Nº O.S</th>
                        <th>LOCAL</th>
                        <th>SOLICITANTE</th>
                        <th>TIPO DO REPARO</th>
                        <th>DATA DA SOLICITAÇÃO</th>
                        <th>OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0001</td>
                        <td>Sorreto</td>
                        <td>Sergio</td>
                        <td>Civil</td>
                        <td>01/01/2000</td>
                        <td><Button variant="warning" size="sm">Editar</Button> <Button variant="danger" size="sm">Excluir</Button> <Button variant="primary" size="sm">Exibir</Button></td>
                    </tr>  
                    <tr>
                        <td>0002</td>
                        <td>Savona</td>
                        <td>Victor</td>
                        <td>Civil</td>
                        <td>01/02/2000</td>
                        <td><Button variant="warning" size="sm">Editar</Button> <Button variant="danger" size="sm">Excluir</Button> <Button variant="primary" size="sm">Exibir</Button></td>
                    </tr>  
                    <tr>
                        <td>0003</td>
                        <td>Maggiore</td>
                        <td>Edclei Caldas</td>
                        <td>Civil</td>
                        <td>01/03/2000</td>
                        <td><Button variant="warning" size="sm">Editar</Button> <Button variant="danger" size="sm">Excluir</Button> <Button variant="primary" size="sm">Exibir</Button></td>
                    </tr>  
                </tbody>
            </Table>
</>

    
    );
}
export default Dados;
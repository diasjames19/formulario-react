import Cookies from "js-cookie";
import qs from 'qs';
import axios from 'axios';



const urlBackEnd = axios.create({
        baseURL:'http://localhost:4001'
});

/*
const chamadaFetchApi = async(endpoint, body)=>{

    if(!body.token){
        let token = Cookies.get('token');
        if(token){
                body.token = token;
        }
    }
/*
    const res = await api
                        .post(endpoint,{

    })
}
*/

const configApi ={

    register: async(funcao,login,password)=>{
        let dados = {funcao,login,password};
        const res = await axios
                            .post(
                                '/user/signup',dados                     
                                
                            ).then()
                             
                            console.log(res);
                            return res;

    }

/*
    login: async(login,senha)=>{
            return{error:"Não foi possivel logar"};
    }*/
}

export default() => configApi;
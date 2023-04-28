import Cookies from "js-cookie";
import qs from 'qs';
import api from "../services/backApi";


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

    })*/
}


const configApi ={

    register: async(funcao,login, password)=>{
        const json = await api
                            .post(
                                '/user/signup',
                                {
                                    funcao,
                                    login,
                                    password
                                }
                            );
                            return json;

    }

/*
    login: async(login,senha)=>{
            return{error:"Não foi possivel logar"};
    }*/
}

export default() => configApi;
import Cookies from "js-cookie";
import qs from 'qs';


const BASEAPI ='http://localhost:4001';


const apiFetchPost = async(endpoint, body)=>{
   if(!body.token){
        let token = Cookies.get('token');
        if(token){
                body.token = token;
        }
    }
    const res = await fetch(BASEAPI+endpoint,{
        method:'POST',
        mode: 'cors',
        headers: {
          
          'Access-Control-Allow-Origin': '*',
          'Accept':'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();
    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchGet = async(endpoint, body =[])=>{
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
                body.token = token;
        }
    }
    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();
    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}
const configApi ={
    login: async(login,password)=>{

        const json = await apiFetchPost(
                                '/user/signin',
                                {
                                    login,
                                    password
                                    
                                }                     
                                
        );
        return json
},

    register: async(funcao,login,password)=>{
        const json = await apiFetchPost(
                                '/user/signup',
                                {
                                    funcao,
                                    login,
                                    password
                                    
                                }                     
                                
                            );
                             
                            return json;

    }

}
export default()=> configApi;
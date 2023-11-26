import { BASE_URL } from "../../public/config"

const getToken =()=>{
    return localStorage.getItem("token")
}

const putToken =(token)=>{
    localStorage.setItem("token", token)
}

const login =async({email, password})=>{
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         email, password
        })
      });
    const responseJson =await  response.json()
    if(responseJson.detail ==="success logged in"){
        return {error : false, data : responseJson.token}
    }else{
        return {error : true, message: responseJson.detail }
    }
}
const register = async({name, email, password})=>{
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         name, email, password
        })
      });
    const responseJson = await response.json();
    if(responseJson.detail ==="success register new account"){
        return {error: false, message: responseJson.detail}
    }else{
        return {error : true, message: responseJson.detail}
    }
}

const getUserLogged =async()=>{
    const response = await fetch('https://cms-admin-v2.ihsansolusi.co.id/testapi/auth/me', {
        headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${getToken()}`
        }
    });
    const responseJson = await response.json()
    if(responseJson.name){
        return {error : false, data: responseJson}
    }else{
        return {error: true, message : responseJson.detail}
    }
}
export {
    login, register, getUserLogged, getToken, putToken
}
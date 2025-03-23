import { useNavigate } from "react-router";
import { post } from "../utils/requester.js";


const baseUrl = 'http://localhost:3030/users';

export const useLogin =  () => {
    const navigate = useNavigate()

    const login = async (email, password) => {
        try{
            const response = await post(`${baseUrl}/login`, { email,password });
            
        console.log(response);
        if(response.message){
            return
        } else {
            localStorage.setItem('auth', JSON.stringify(response))
            navigate('/')
        }

            
        }catch(err){
            console.alert(err.message)
        };

    };

    return {login};
;}

export const useRegister = () => {

    const register = async (email, password) => {
        const response = await post(`${baseUrl}/register`, { email,password });
        localStorage.setItem('auth', JSON.stringify(response))
    };

    return {register};
;}


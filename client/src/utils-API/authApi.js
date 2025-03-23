import { useNavigate } from "react-router";
import { post } from "../utils/requester.js";


const baseUrl = 'http://localhost:3030/users';

export const useLogin =  () => {
    const navigate = useNavigate()

    const login = async (email, password) => {
        
            const response = await post(`${baseUrl}/login`, { email,password });
            
            localStorage.setItem('auth', JSON.stringify(response))
            return response;
    };

    return {login};
;}

export const useRegister = () => {

    const register = async (email, password) => {
        const response = await post(`${baseUrl}/register`, { email,password });
        localStorage.setItem('auth', JSON.stringify(response))
        return response
    };

    return {register};
;}


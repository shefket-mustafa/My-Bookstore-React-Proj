
import { get, post } from "../utils/requester.js";
import { useUserContext } from "../provider-and-context/UserContext.jsx";
import { useEffect, useState } from "react";


const baseUrl = 'http://localhost:3030/users';

export const useLogin =  () => {

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

export const useLogout = () => {

    const {logoutUserHandler, accessToken} = useUserContext();
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(()=>{
        console.log(accessToken);
        

        if (!accessToken) {
            
            setIsLoggedOut(true); 
            return;
          }

        const options = {
            headers: {'X-Authorization': accessToken}
        }

        
        get(baseUrl + `/logout`, options)
        .then(() => {
            
            logoutUserHandler();
            localStorage.removeItem('auth');
            setIsLoggedOut(true);
        })
        .catch((err)=>{
            
            setIsLoggedOut(true)
        })
    },[logoutUserHandler,accessToken])

    return {
        isLoggedOut
    }
}


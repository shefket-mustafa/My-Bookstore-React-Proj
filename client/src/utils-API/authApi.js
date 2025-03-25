
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

    const {logoutUserHandler, accessToken, errorHandler} = useUserContext();
    const [isLoggedOut, setIsLoggedOut] = useState(false);

        const logout = async () => {

            try {

                if (accessToken) {
                
                const options = {
                    headers: {'X-Authorization': accessToken}
                }

                await get(`${baseUrl}/logout`,options)
                }
                localStorage.removeItem("auth");
                logoutUserHandler();
            }
        catch(err){
            errorHandler(err.message)
            
        }
    }
    return {logout}
}


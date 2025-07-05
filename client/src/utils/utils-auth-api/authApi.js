
import { useAuthContext } from "../../provider-and-context/AuthContext.jsx";
import { usePopUpContext } from "../../provider-and-context/PopUpContext.jsx";
import { get, post } from "../requester.js";

import { useState } from "react";


const baseUrl = 'https://my-bookstore-react-proj-5.onrender.com/users';

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

    const {logoutUserHandler, accessToken} = useAuthContext();
    const {errorMessageHandler} = usePopUpContext()
    const [isLoggedOut] = useState(false);

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
            errorMessageHandler(err.message)
            
        }
    }
    return {logout}
}


import { post } from "../utils/requester.js";


const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {

    const login = async (email, password) => {
        post(`${baseUrl}/login}`, { email,password });

    };

    return login;
;}

export const useRegister = () => {

    const register = async (email, password) => {
        post(`${baseUrl}/register}`, { email,password });
    };

    return register;
;}


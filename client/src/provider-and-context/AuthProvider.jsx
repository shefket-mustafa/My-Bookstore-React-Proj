import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext.jsx";
import { useNavigate } from "react-router";
import { setNavigate } from "../utils/requester.js";


    export default function AuthProvider({children}) {

      const navigate = useNavigate();
      const [userData, setUserData] = useState({});
      
      useEffect(()=>{
        const storedAuth = JSON.parse(localStorage.getItem('auth'));
        if(storedAuth?.accessToken){
          setUserData(storedAuth)
        }
      },[])

      useEffect(()=>{
        setNavigate(navigate)
      },[navigate])

      const loginUserDataHandler = (data) => {
        setUserData(data);
        
      };
      const registerUserDataHandler = (data) => {
        setUserData(data);
      };

      const logoutUserHandler = () => {
        setUserData({});
      };
      
      return (
        <AuthContext.Provider  value={{
          user: userData,
          loginUserDataHandler, 
          logoutUserHandler, 
          registerUserDataHandler, 
          isAuthenticated: !!userData.accessToken
          }}>
          {children}
        </AuthContext.Provider>
          
        );
    }
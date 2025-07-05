import { createContext, useContext } from "react"



    export const AuthContext = createContext({
        id: '',
        email: '',
        accessToken: '',
        isAuthenticated: Boolean,
        logoutUserHandler: () => null,
        loginUserDataHandler: () => null,
        registerUserDataHandler: () => null,
    })

    export function useAuthContext(){
        const data = useContext(AuthContext)

        return data;
    };
      
    

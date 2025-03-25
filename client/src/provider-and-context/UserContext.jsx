import { createContext, useContext } from "react"



    export const UserContext = createContext({
        id: '',
        email: '',
        accessToken: '',
        isAuthenticated: Boolean,
        logoutUserHandler: () => null,
        loginUserDataHandler: () => null,
        registerUserDataHandler: () => null,
        errorHandler: () => null
    })

    export function useUserContext(){
        const data = useContext(UserContext)

        return data;
    };
      
    

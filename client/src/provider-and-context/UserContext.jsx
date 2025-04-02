import { createContext, useContext } from "react"



    export const UserContext = createContext({
        id: '',
        email: '',
        accessToken: '',
        bookDetails: '',
        isAuthenticated: Boolean,
        messageHandler: () => null,
        detailsHandler: () => null,
        logoutUserHandler: () => null,
        loginUserDataHandler: () => null,
        registerUserDataHandler: () => null,
        deleteHandler: () => null,
        // loadBookByIdEdit:() => null,
        editHandler: () => null,
        errorHandler: () => null
    })

    export function useUserContext(){
        const data = useContext(UserContext)

        return data;
    };
      
    

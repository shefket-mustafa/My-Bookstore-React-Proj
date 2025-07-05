import { useState } from "react";
import { PopUpContext } from "./PopUpContext"

export const PopUpProvider = ({children}) => {

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const successMessageHandler = (message) => {
        setSuccessMessage(message);

        setTimeout(()=>setSuccessMessage(''),2000);
      }

    const errorMessageHandler = (message) => {
        setError(message);
        setTimeout(() => setError(""),2000)
    }




    return (
        <PopUpContext.Provider value={{
            error,
            successMessage,
            successMessageHandler,
            errorMessageHandler
        }}>
            {children}
        </PopUpContext.Provider>
    )
}
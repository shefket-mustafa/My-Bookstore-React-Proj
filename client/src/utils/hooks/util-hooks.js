import { useState } from "react";

export const useErrorMessageHandler = () => {

    const [error, setError] = useState('');
    
    const errorMessageHandler = (message) => {
        setError(message);
        setTimeout(() => setError(""),2000)
    }
    
    return {errorMessageHandler, error}
}

export const useSuccessMessageHandler = () => {
    const [successMessage, setSuccessMessage] = useState('');

    const successMessageHandler = (message) => {
        setSuccessMessage(message);

        setTimeout(()=>setSuccessMessage(''),2000);
      }

      return {successMessageHandler, successMessage}
}
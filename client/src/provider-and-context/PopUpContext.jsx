    import { createContext, useContext } from "react";


    export const PopUpContext = createContext({
        error: '',
        successMessage: '',
        successMessageHandler: () => null,
        errorMessageHandler: () => null
    })

    export const usePopUpContext = () => {
        const data = useContext(PopUpContext);

        return data;
    };
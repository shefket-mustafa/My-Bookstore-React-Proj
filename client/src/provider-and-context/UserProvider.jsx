import { useState } from "react";
import { UserContext } from "./UserContext";
import ErrorModal from "../components/error-modal/ErrorModal";

    export default function UserProvider({children}) {

      const [userData, setUserData] = useState({});
      const [error, setError] = useState('');

      const loginUserDataHandler = (data) => {
        setUserData(data);
      };
      const registerUserDataHandler = (data) => {
        setUserData(data);
      };

      const logoutUserHandler = (data) => {
        setUserData({});
      };

      const errorHandler = (message) => {
        setError(message);
        setTimeout(()=>setError(''),1000)
      }

      return (
        <UserContext.Provider  value={{...userData,loginUserDataHandler, logoutUserHandler, errorHandler, registerUserDataHandler}}>
          {error && <ErrorModal message={error} />}
          {children}
        </UserContext.Provider>
          
        );
    }
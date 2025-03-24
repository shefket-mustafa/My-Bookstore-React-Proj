import { Navigate } from "react-router";
import { useLogout } from "../../utils-API/authApi";

export default function Logout() {

    
    const {isLoggedOut} = useLogout();
    
  return (
      <>
      {isLoggedOut && <Navigate to='/' />}
      </>
    );
}
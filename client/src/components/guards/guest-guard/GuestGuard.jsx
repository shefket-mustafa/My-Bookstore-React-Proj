import { Navigate, Outlet, useNavigate } from "react-router";
import { useUserContext } from "../../../provider-and-context/UserContext";

export default function GuestGuard() {
        const { isAuthenticated } = useUserContext()
        

        if(isAuthenticated){
            return <Navigate to='/'/>
        };
  return (
      <>
      <Outlet />
      </>
    );
}
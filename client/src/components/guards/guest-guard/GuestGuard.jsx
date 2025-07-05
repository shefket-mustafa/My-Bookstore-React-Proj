import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../../provider-and-context/AuthContext";

export default function GuestGuard() {
        const { isAuthenticated } = useAuthContext()
        

        if(isAuthenticated){
            return <Navigate to='/'/>
        };
  return (
      <>
      <Outlet />
      </>
    );
}
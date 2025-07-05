import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuthContext } from "../../../provider-and-context/AuthContext";

export default function UserGuard() {
        const { isAuthenticated } = useAuthContext()
        const navigate = useNavigate();

        if(!isAuthenticated){
            return <Navigate to='/login'/>
        };
  return (
      <>
      <Outlet />
      </>
    );
}
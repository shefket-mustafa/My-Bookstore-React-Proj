import { Navigate, Outlet, useNavigate } from "react-router";
import { useUserContext } from "../../../provider-and-context/UserContext";

export default function UserGuard() {
        const { isAuthenticated } = useUserContext()
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
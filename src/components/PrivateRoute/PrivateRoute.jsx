import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

export const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

export const RestrictedRoute = ({ component, redirectTo = "/contacts" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

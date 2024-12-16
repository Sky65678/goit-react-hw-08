import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../../redux/auth/selectors";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectAuthUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.cont}>
      <div className={css.p}>
        <p>Hello,{user.name}!</p>
        <p>Email:{user.email}</p>
      </div>
      <button className={css.button} type="button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;

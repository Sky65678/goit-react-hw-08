import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, NavLink } from "react-router-dom";
import { fetchContacts } from "../../redux/contacts/operations";
import { lazy, Suspense } from "react";
import { selectAuthIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";

import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
export default function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isRefreshing) return <p>User is refreshing, please wait...</p>;

  return (
    <div>
      <main>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
          </Routes>
        </Layout>
      </main>
    </div>
  );
}

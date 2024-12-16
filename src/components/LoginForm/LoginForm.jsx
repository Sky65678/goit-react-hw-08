import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthError } from "../../redux/auth/selectors";

const initValues = {
  email: "",
  password: "",
};

// Схема валідації
const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required("This field is required!")
    .min(8, "Too short, min 8 letters!")
    .max(15, "Too long, max 15 letters!"),
  email: Yup.string()
    .required("This field is required!")
    .email("Invalid Email "),
});

// Форма контакту
export default function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  //   const handleSubmit = (values, actions) => {
  //     dispatch(register(values));
  //     actions.resetForm();
  //   };
  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.inputContainer}>
          <label htmlFor="number">Email:</label>
          <Field className={css.input} name="email" type="text" />
          <ErrorMessage
            className={css.inputError}
            name="email"
            component="span"
          />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor="number">Password:</label>
          <Field className={css.input} name="password" type="password" />
          <ErrorMessage
            className={css.inputError}
            name="password"
            component="span"
          />
        </div>
        <button className={css.inputButton} type="submit">
          Login
        </button>

        {error && (
          <p className={css.inputError}> Oops, some error occured... {error}</p>
        )}
      </Form>
    </Formik>
  );
}

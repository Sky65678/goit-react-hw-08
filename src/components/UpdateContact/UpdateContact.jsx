import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import React from "react";
import css from "./UpdateContact.module.css";

import Modal from "react-modal";

const phoneRegExp = /^[0-9]{7}$/;

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 50 letters!")
    .required("This field is required!"),
  number: Yup.string()
    .matches(phoneRegExp, "Must be in number format!")
    .required("This field is required!"),
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const UpdateContact = ({ contact }) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onUpdateContact = (values, actions) => {
    dispatch(updateContact({ contactId: contact.id, updateData: values }));

    actions.resetForm({
      values: {
        name: "",
        number: "",
      },
    });

    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Update</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <Formik
          initialValues={{
            name: "",
            number: "",
          }}
          onSubmit={onUpdateContact}
          validationSchema={UserSchema}
        >
          <Form>
            <div className={css.inputContainer}>
              <label>Name</label>
              <Field className={css.input} type="text" name="name" />
              <ErrorMessage
                className={css.inputError}
                name="name"
                component="span"
              />
            </div>
            <div className={css.inputContainer}>
              <label htmlFor="number">Number</label>
              <Field className={css.input} name="number" type="text" />
              <ErrorMessage
                className={css.inputError}
                name="number"
                component="span"
              />
            </div>
            <button className={css.inputButton} type="submit">
              Update
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default UpdateContact;

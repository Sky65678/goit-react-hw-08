import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import Contact from "../../components/Contact/Contact";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { addContact } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = (contactValues) => {
    dispatch(addContact(contactValues));
  };

  return (
    <div>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox />
      <Contact />
    </div>
  );
}

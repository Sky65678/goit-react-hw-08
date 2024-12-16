import Contact from "../Contack/Contack";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";

export default function ContactList() {
  const visibleUsers = useSelector(selectFilteredContacts);

  return (
    <ul className={css.container}>
      {visibleUsers.map((item) => (
        <li className={css.item} key={item.id}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
}

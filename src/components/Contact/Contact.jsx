import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import {
  selectUserContacts,
  selectUserContactsError,
  selectUserContactsLoading,
} from "../../redux/contacts/selectors";
import css from "../Contact/Contact.module.css";
import { selectFilterValue } from "../../redux/filters/selectors";

import UpdateContact from "../UpdateContact/UpdateContact";

export default function Contact() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectUserContacts);
  const loading = useSelector(selectUserContactsLoading);
  const error = useSelector(selectUserContactsError);
  const filterValue = useSelector(selectFilterValue);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      contact.number.toString().includes(filterValue)
  );

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      {loading && <p>Loading..</p>}
      {error !== null && <p>{error}, pleaser try again</p>}
      {!loading && Array.isArray(contacts) && contacts.length === 0 && (
        <p>Contacts list is empty</p>
      )}
      <ul className={css.contactList}>
        {Array.isArray(filteredContacts) &&
          filteredContacts.map((contact) => (
            <li key={contact.id} className={css.contactItem}>
              <div className={css.details}>
                <div className={css.item}>
                  <IoPersonSharp size="16" />
                  <p>{contact.name}</p>
                </div>
                <div className={css.item}>
                  <FaPhoneAlt size="16" />
                  <p>{contact.number}</p>
                </div>
              </div>
              <div className={css.containerButton}>
                <button
                  className={css.deleteButton}
                  onClick={() => onDeleteContact(contact.id)}
                  type="button"
                >
                  Delete
                </button>
                <UpdateContact contact={contact} />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

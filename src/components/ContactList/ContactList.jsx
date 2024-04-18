import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <li
          className={style.item}
          key={contact.id}>
          <Contact
            contact={contact}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

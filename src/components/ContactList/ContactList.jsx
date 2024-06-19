import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import style from "./ContactList.module.css";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className={style.list}>
      {visibleContacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        );
      })}
    </div>
  );
}

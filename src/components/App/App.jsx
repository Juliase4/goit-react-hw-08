import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { FaAddressBook } from "react-icons/fa6";
import style from "./App.module.css";

export default function App() {
  return (
    <div>
      <h1 className={style.title}>
        Phonebook <FaAddressBook className={style.icon} />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

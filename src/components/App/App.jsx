import { useEffect, useState } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import contactsData from "../ContactList/contactsData.json";

export default function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || contactsData
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox
        filter={filter}
        setFilter={setFilter}
        onChange={handleSearchChange}
      />
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}
      />
    </div>
  );
}

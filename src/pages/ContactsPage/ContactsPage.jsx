import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors.js";
import { fetchContacts } from "../../redux/contacts/operations.js";

import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <PageTitle>Your contacts</PageTitle>
      <ContactEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBox />
      <ContactList />
    </div>
  );
}

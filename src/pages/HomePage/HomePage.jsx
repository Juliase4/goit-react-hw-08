import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import { FaAddressBook } from "react-icons/fa6";

import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <PageTitle>
        Welcome Phonebook page{" "}
        <span className={css.icon}>
          <FaAddressBook />
        </span>
      </PageTitle>
    </div>
  );
}

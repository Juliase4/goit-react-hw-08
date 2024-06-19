import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import style from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <FaUser />
          <p className={style.name}>{name}</p>
        </li>
        <li className={style.item}>
          <FaPhone />
          <p className={style.number}>{number}</p>
        </li>
      </ul>
      <button
        className={style.btn}
        type="button"
        onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}

import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <FaUser />
          <p className={css.name}>{name}</p>
        </li>
        <li className={css.item}>
          <FaPhone />
          <p className={css.number}>{number}</p>
        </li>
      </ul>
      <button
        className={css.btn}
        type="button"
        onClick={() => handleDelete(id)}>
        <MdDeleteForever />
      </button>
    </div>
  );
}

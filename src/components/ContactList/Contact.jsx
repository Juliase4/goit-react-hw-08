import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import style from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
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
        onClick={() => {
          onDelete(id);
        }}>
        Delete
      </button>
    </>
  );
}

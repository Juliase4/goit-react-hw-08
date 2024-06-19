import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import style from "./SearchBox.module.css";

export default function SearchBox({ value }) {
  const dispatch = useDispatch();
  const onFindContact = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={style.wrapper}>
      <p className={style.nameInput}>Find conatacts by name</p>
      <input
        className={style.searchInput}
        type="text"
        name="findByName"
        value={value}
        onChange={(event) => onFindContact(event.target.value)}
      />
    </div>
  );
}

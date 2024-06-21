import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = (e) => dispatch(changeFilter(e.target.value.trim()));

  return (
    <div className={css.container}>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Search..."
      />
    </div>
  );
}

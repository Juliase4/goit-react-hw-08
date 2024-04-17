import style from "./SearchBox.module.css";

export default function SearchBox({ filter, setFilter }) {
  return (
    <div className={style.wrapper}>
      <p className={style.nameInput}>Find conatacts by name</p>
      <input
        className={style.searchInput}
        type="text"
        name="findByName"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
}

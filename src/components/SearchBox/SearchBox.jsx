import css from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterValue } from "../../redux/filters/selectors";
import { setFilterValue } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filterValue = useSelector(selectFilterValue);

  const handleSearch = (value) => {
    dispatch(setFilterValue(value));
  };

  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={css.searchCont}>
      <p>Find contacts by name</p>
      <input
        className={css.inputField}
        type="text"
        value={filterValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

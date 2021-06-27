import { useRef } from "react";
import { Search } from "@material-ui/icons";
import styles from "./index.module.css";
function HeaderSearchInput({ onSubmit }) {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (!value || value.length === 0) return;
    onSubmit && onSubmit(value);
  };
  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <Search />
      <input
        ref={inputRef}
        type="text"
        placeholder="Artists, songs, or podcasts"
      />
      <button type="submit" hidden>
        submit
      </button>
    </form>
  );
}

export default HeaderSearchInput;

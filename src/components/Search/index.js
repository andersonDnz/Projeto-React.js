import styles from "./styles.module.css";

function Search() {
  return (
    <>
      <input className={styles.search} type="text" placeholder="Search" />
    </>
  );
}

export default Search;
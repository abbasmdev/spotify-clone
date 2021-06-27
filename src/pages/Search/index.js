import { useCallback, useEffect, useState } from "react";
import { spotifyInstance } from "../../spotify";
import CategoryItem from "../../components/Search/CategoryItem";
import styles from "./index.module.css";
function Search() {
  const [categoriesList, setCategoriesList] = useState([]);
  const fetchCategories = useCallback(() => {
    spotifyInstance
      .getCategories({ limit: 50 })
      .then((res) => {
        const cats = res?.categories?.items;
        setCategoriesList(cats);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  console.log("categoriesList>>", categoriesList);
  return (
    <div className={styles.container}>
      <h3>Browse all</h3>
      <div className={styles.categoriesList}>
        {categoriesList.map((cat) => (
          <CategoryItem
            className={styles.categoryItem}
            key={cat?.id}
            imageSrc={cat?.icons?.[0]?.url}
            name={cat?.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;

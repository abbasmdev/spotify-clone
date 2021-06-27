import { useCallback, useEffect, useState } from "react";
import { spotifyInstance } from "../../spotify";
import CategoryItem from "../../components/Search/CategoryItem";
import styles from "./index.module.css";
import { useHistory } from "react-router-dom";
function Search() {
  const history = useHistory();
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

  const categoryItemClickHandler = (id) => {
    history.push(`/genre/${id}`);
  };

  return (
    <div className={styles.container}>
      <h3>Browse all</h3>
      <div className={styles.categoriesList}>
        {categoriesList.map((cat) => (
          <CategoryItem
            onClick={() => categoryItemClickHandler(cat?.id)}
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

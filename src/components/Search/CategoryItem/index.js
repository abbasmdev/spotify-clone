import styles from "./index.module.css";
function CategoryItem({ className, name, imageSrc }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <img className={styles.image} src={imageSrc} alt={name} />
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
}

export default CategoryItem;

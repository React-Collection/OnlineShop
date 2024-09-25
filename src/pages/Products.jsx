import CardComponent from "../../components/cardComponent/CardComponent";
import styles from "./pageStyles/products.module.scss";
import dataProducts from "../../dataBase/dataBase";

const Products = () => {
  return (
    <div className={styles.parentSection}>
      {dataProducts.map((product) => (
        <CardComponent
          key={product.id}
          banner={product.image}
          title={product.name}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};
export default Products;

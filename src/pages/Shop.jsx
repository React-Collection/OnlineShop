// import { useParams } from "react-router-dom";

import styles from "./pageStyles/shop.module.scss";
import ListProducts from "./ListProducts";

const Shop = () => {
  return (
    <div className={styles.parentSection}>
      <h1>All Products </h1>
      <div>
        <ListProducts />
      </div>
    </div>
  );
};

export default Shop;

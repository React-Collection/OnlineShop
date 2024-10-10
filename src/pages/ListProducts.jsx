import { Link } from "react-router-dom";

import styles from "./pageStyles/listProduct.module.scss";
import dataProducts from "../../dataBase/dataBase";

const ListProducts = () => {
  return (
    <div className={styles.parent}>
      {dataProducts.map((product) => (
        <Link to={`/Shop/${product.id}`} key={product.id}>
          {product.name}
        </Link>
      ))}
    </div>
  );
};

export default ListProducts;

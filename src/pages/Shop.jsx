import { Outlet } from "react-router-dom";

import styles from "./pageStyles/shop.module.scss";

const Shop = () => {
  return (
    <div className={styles.parentSection}>
      <h1>All Products</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Shop;

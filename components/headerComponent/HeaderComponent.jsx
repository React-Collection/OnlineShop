import {Link } from "react-router-dom";

import { LOGO } from "../../constant/constImage";
import styles from "./index.module.scss";
import HeaderItems from "./HeaderItems";

const HeaderComponent = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.headerItems}>
        <img src={LOGO} alt="" />
        {HeaderItems.map((element, index) => (
          <Link to={element.item} key={index}>
            {element.item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;

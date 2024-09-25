import PropTypes from "prop-types";

import styles from "./index.module.scss";

const CardComponent = ({
  title = "",
  description = "",
  banner = "",
  price = 0,
  category = "",
}) => {
  return (
    <div className={styles.parentCard}>
      <img src={banner} alt="" />
      <div className={styles.description}>
        <h2> {title}</h2>
        <p>{description} </p>
      </div>
      <div className={styles.info}>
        <p> {price}</p>
        <p>{category} </p>
      </div>
    </div>
  );
};
export default CardComponent;

CardComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
};

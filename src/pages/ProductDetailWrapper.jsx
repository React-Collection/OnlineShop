import { useParams } from "react-router-dom";

import CardComponent from "../../components/cardComponent/CardComponent";
import dataProducts from "../../dataBase/dataBase";

const ProductDetailWrapper = () => {
  const { id } = useParams();
  const product = dataProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <CardComponent
      title={product.name}
      description={product.description}
      banner={product.image}
      price={product.price}
      category={product.category}
    />
  );
};

export default ProductDetailWrapper;

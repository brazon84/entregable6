import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsCard from './ProductsCard';

const SimilarProducts = ({ product }) => {
  const [filterProducts, setFilterProducts] = useState([]);

  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    if (allProducts.length !== 0 && product?.category) {
      const filter = allProducts.filter((e) => e.category.name === product.category);
      setFilterProducts(filter);
    }
  }, [allProducts, product]);

  return (
    <article className="similar__products">
      <h2 className="similar__products__title">Discover similar products</h2>
      {filterProducts
        .filter((e) => e.title !== product.title)
        .map((e) => (
          <ProductsCard key={e.id} product={e} />
        ))}
    </article>
  );
};

export default SimilarProducts;

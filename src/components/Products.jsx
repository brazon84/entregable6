import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InputSearch from './InputSearch';
import InputSelect from './InputSelect';
import ProductsCard from './ProductsCard';

const Products = () => {
  const products = useSelector((state) => state.products);
  const [productsFilter, setProductsFilter] = useState(products);

  const { name } = useParams();

  useEffect(() => {
    if (name) {
      const filteredProducts = products.filter(
        (product) => product.category.name === name
        
      );
 
      setProductsFilter(filteredProducts);
    } else {
      setProductsFilter(products);
    }
    console.log(products);
  }, [name, products]);
  return (
    <div className="products">
      <div className="inputs__search">
        <InputSearch />
        <InputSelect />
      </div>
      {productsFilter?.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

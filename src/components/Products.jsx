import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProducts2}  from '../store/slices/getAllProducts.slice';
import InputSearch from './InputSearch';
import InputSelect from './InputSelect';
import ProductsCard from './ProductsCard';
import { useDispatch} from "react-redux";


const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getAllProducts2());  }, []);
    const products = useSelector((state) => state.getAllProducts);
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
    console.log('GETALL');
    
    
  }, [name, products]);
  return (
    <div className="products">
      <div className="inputs__search">
        <InputSearch />
        <InputSelect />
      </div>
      {productsFilter?.map((products) => (
        <ProductsCard key={products.id} product={products} />
      ))}
    </div>
  );
};

export default Products;

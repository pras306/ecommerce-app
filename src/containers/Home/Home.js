import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Home.css';
import { useGetProductsQuery } from '../../features/Products/ProductsSlice';
import { openLoader, closeLoader } from '../../features/Loader/LoaderSlice';
import { ProductList } from '../../components';

const Home = () => {
    const { data: productList, isFetching } = useGetProductsQuery();
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const { term } = useSelector(store => store.productFilter);

    useEffect(() => {
        if(term.length === 0) {
            setProducts(productList?.products);
        } else {
            const filteredProducts = productList?.products.filter(product => {
                return product.title.toLowerCase().includes(term.toLowerCase()) || product.brand.toLowerCase().includes(term.toLowerCase()) || product.category.toLowerCase().includes(term.toLowerCase());
            });
            setProducts(filteredProducts);
        }
    }, [productList, term]);

    useEffect(() => {
        if(isFetching) {
            dispatch(openLoader());
        } else {
            dispatch(closeLoader());
        }
    }, [isFetching, dispatch]);

    return (
        <div className='app__home'>
            <ProductList products={products} />
        </div>
    );
};

export default Home;
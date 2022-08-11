import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './Home.css';
import { useGetProductsQuery } from '../../features/Products/ProductsSlice';
import { openLoader, closeLoader } from '../../features/Loader/LoaderSlice';
import { ProductList } from '../../components';

const Home = () => {
    const { data: productList, isFetching } = useGetProductsQuery();
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setProducts(productList?.products);
    }, [productList]);

    const renderPage = () => {
        if(isFetching) {
            dispatch(openLoader());
        } else {
            dispatch(closeLoader());
            return (
                <div className='app__home'>
                    <ProductList products={products} />
                </div>
            );
        }
    }

    return (
        <>
            {renderPage()}
        </>
    );
};

export default Home;
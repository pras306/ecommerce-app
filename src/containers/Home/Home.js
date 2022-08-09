import React, { useState, useEffect } from 'react';

import './Home.css';
import { useGetProductsQuery } from '../../features/Products/ProductsSlice';
import { ProductList } from '../../components';

const Home = () => {
    const { data: productList, isFetching } = useGetProductsQuery();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productList?.products);
    }, [productList]);

    const renderPage = () => {
        if(isFetching) {
            return <div>Loading...</div>
        } else {
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
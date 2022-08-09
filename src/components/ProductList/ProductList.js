import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './ProductList.css';

const ProductList = ({ products }) => {

    const renderRating = (rating) => {
        let ratingArray = new Array(5).fill(0).map((_, i) => {
            if(i + 1 <= rating) return 1;
            else if(i + 0.5 <= rating) return 0.5;
            else return 0;
        });
        return (
            <>
                {ratingArray.map((num, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            {num === 1 ? <BsStarFill /> : num === 0.5 ? <BsStarHalf /> : <BsStar />}
                        </React.Fragment>
                    );
                })}
            </>
        );
    };

    const calculateDiscountPrice = (price, discount) => {
        return ((Number(discount) / 100) * Number(price)).toFixed(2);
    };

    return (
        <div className='app__product-list'>
            {products?.map((product, idx) => {
                return (
                    <Link to={`/products/${product.id}`} className='app__product-list-product' key={idx}>
                        <div className="app__product-list-image">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="app__product-list-details">
                            <div className="app__product-list-title">
                                <h3>{product.title}</h3>
                            </div>
                            <div className="app__product-list-rating">
                                <span>{renderRating(product.rating)}</span>
                            </div>
                            <div className="app__product-list-price">
                                <span>Original Price: <span className='app__product-list-money'>${product.price.toFixed(2)}</span></span>
                                <span>You Avail: <span className='app__product-list-money'>${calculateDiscountPrice(product.price, product.discountPercentage)}</span></span>
                                <span>You pay: <span className='app__product-list-money'>${product.price - calculateDiscountPrice(product.price, product.discountPercentage)}</span></span>
                            </div>
                            <div className="app__product-list-footer">
                                <span>Brand: <strong>{product.brand}</strong> </span>
                                <span>Category: <strong>{product.category}</strong></span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProductList;

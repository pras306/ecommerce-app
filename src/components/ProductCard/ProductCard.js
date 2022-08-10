import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import "./ProductCard.css";
import { useGetProductQuery } from '../../features/Products/ProductsSlice';
import { addItems } from '../../features/Cart/CartSlice';
import { ImageSlider } from '../index';

const ProductCard = () => {
    const [quantity, setQuantity] = useState(1);
    const params = useParams();
    const { data: product, isFetching  } = useGetProductQuery(params.id);
    const dispatch = useDispatch();

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

    const handleQuantity = (rate) => {
        if(rate === 'increment') {
            setQuantity(quantity + 1);
        } else {
            if(quantity === 1) {
                alert('Quantity cannot be decreased further.');
                return;
            };
            setQuantity(quantity - 1);
        }
    }

    const handleAddToCart = () => {
        let item = {
            id: product.id,
            image: product.thumbnail,
            title: product.title,
            quantity: quantity,
            amount: product.price - calculateDiscountPrice(product.price, product.discountPercentage)
        };

        dispatch(addItems(item));
    }

    const renderComponent = () => {
        if(isFetching) return <div>Loading...</div>
        else {
            return (
                <div className='app__product'>
                    <div className="app__product-image">
                        <ImageSlider active={product.thumbnail} images={[ product.thumbnail, ...product.images]} title={product.title} />
                    </div>
                    <div className="app__product-content">
                        <h2>{product.title}</h2>
                        <span>{product.description}</span>
                        <div className="app__product-rating">
                            <span>Rating:</span>
                            <span>{renderRating(product.rating)}</span>
                        </div>
                        <div className="app__product-price">
                            <span>Original Price: <span className='app__product-money'>${product.price.toFixed(2)}</span></span>
                            <span>You Avail: <span className='app__product-money'>${calculateDiscountPrice(product.price, product.discountPercentage)}</span></span>
                            <span>You pay: <span className='app__product-money'>${product.price - calculateDiscountPrice(product.price, product.discountPercentage)}</span></span>
                        </div>
                        <div className="app__product-quantity">
                            <span>Quantity: </span>
                            <BsChevronLeft onClick={() => handleQuantity('decrement')} />
                            <span>{quantity}</span>
                            <BsChevronRight onClick={() => handleQuantity('increment')} />
                        </div>
                        <div className="app__product-btns">
                            <button onClick={handleAddToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    return (
        <>
            {renderComponent()}
        </>
    );
};

export default ProductCard;
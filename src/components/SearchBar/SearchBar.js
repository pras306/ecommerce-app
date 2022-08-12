import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './SearchBar.css';
import { productsSearch } from '../../features/Products/ProductsFilterSlice';

const SearchBar = () => {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(productsSearch(inputText));
    };

    return (
        <form className='app__search' onSubmit={(e) => handleFormSubmit(e) }>
            <input type={'text'} placeholder='Search for Products' value={inputText} onChange={(e) => setInputText(e.target.value)} />
        </form>
    );
};

export default SearchBar;
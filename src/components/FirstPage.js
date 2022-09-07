import React, { useState } from 'react';
import '../index.css'
import axios from 'axios';
import SearchBar from './SearchBar'
import MainContent from './MainContent';

const FirstPage = () => {
    const APP_ID = "b2285fe5"
    const APP_KEY = "c330812678cabb3efe32443a29deb695"
    const [results, setResults] = useState({ search: {} });

    const onSubmit = async (q) => {
        const requestURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}`
        const response = await axios.get(requestURL)
        setResults({ search: response.data.hits })
    }

    let conditional;
    if (Object.keys(results.search).length === 0) {
        conditional =
            <SearchBar onSubmit={onSubmit.bind(this)} />
    } else {
        conditional = <div>
            <SearchBar onSubmit={onSubmit.bind(this)} />
            <MainContent results={results.search} />
        </div>;
    }

    return conditional
}

export default FirstPage;
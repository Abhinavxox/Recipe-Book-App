import React, { useEffect, useState } from 'react';
import '../index.css'
import axios from 'axios';
import SearchBar from './SearchBar'
import MainContent from './MainContent';

const FirstPage = () => {

    const [results, setResults] = useState({ search: {} });

    const onSubmit = async (q) => {
        const requestURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`
        const response = await axios.get(requestURL)
        if (response.data.meals != null) {
            setResults({ search: response.data.meals })
        }
    }

    useEffect(() => {
        onSubmit("")
    }, []);

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
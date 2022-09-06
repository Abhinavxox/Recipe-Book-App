import React, { useState } from 'react';
import SearchBar from './components/SearchBar'
import MainContent from './components/MainContent';
import Navbar from './components/NavBar';
import './index.css'
import axios from 'axios';

function App() {
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
  return (
    <div className='main-wrapper'>

      <Navbar />
      {conditional}
    </div>
  );
}

export default App;

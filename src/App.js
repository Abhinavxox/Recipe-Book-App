import React from 'react';
import SearchBar from './components/SearchBar'
import './index.css'
import foodBg from './images/foodBg.jpg'

function App() {
  return (
    <div className='main-wrapper' style={{ background: `url(${foodBg})` }}>
      <SearchBar />
    </div>
  );
}

export default App;

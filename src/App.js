import React from 'react';
import SearchBar from './components/SearchBar'
import MainContent from './components/MainContent';
import Navbar from './components/NavBar';
import './index.css'
import foodBg from './images/foodBg.jpg'

function App() {
  return (
    <div className='main-wrapper' style={{ background: `url(${foodBg})` }}>
      <Navbar />
      <SearchBar />
      <MainContent />
    </div>
  );
}

export default App;

import React from 'react';
import '../index.css'

const SearchBar = (props) => {

    const handleSubmit = () => {
        props.onSubmit(document.querySelector('.search-bar').value)
    }

    const handleOnChange = (e) => {
        
        console.log(e.target.value)
        console.log(e)

    }

    return (
        <div className='ui container '>
            <div className="ui icon input search">
                <input className='search-bar' type="text" placeholder="Search..." onChange={handleOnChange} />
                <i className="search link icon" onClick={handleSubmit} />
            </div>
        </div>
    )
}



export default SearchBar;
import React from 'react';

const SearchBar = (props) => {

    const handleSubmit = () => {
        props.onSubmit(document.querySelector('.search-bar').value)
    }

    return (
        <div className='ui container '>
            <div className="ui icon input search">
                <input className='search-bar' type="text" placeholder="Search..." />
                <i className="search link icon" onClick={handleSubmit} />
            </div>
        </div>
    )
}



export default SearchBar;
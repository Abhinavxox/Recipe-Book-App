import React from 'react';

const SearchBar = () => {
    return (
        <div className='ui container '>
            <div className="ui icon input search">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
            </div>
        </div>
    )
}

export default SearchBar
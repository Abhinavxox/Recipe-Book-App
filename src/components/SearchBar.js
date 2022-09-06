import React from 'react';

const SearchBar = () => {
    return (
        <div className='ui very padded segment top-bar'>
            <div className='ui container'>
                <div class="ui icon input search">
                    <input type="text" placeholder="Search..." />
                    <i class="search link icon"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
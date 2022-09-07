import React from 'react';
import '../index.css'
import { Link } from 'react-router-dom';

const MainContent = (props) => {
    const recipes = props.results.map((id) => {
        return (
            <div className='column rcard'>
                <div className="ui card">
                    <Link className="image" to={{
                        pathname: ` ${id.recipe.label}`,
                        state: id
                    }} >
                        <img src={id.recipe.image} alt="hi" />
                    </Link>
                    <div className="content">
                        <Link className="header" to={{
                            pathname: ` ${id.recipe.label}`,
                            state: id
                        }} >{id.recipe.label}</Link>

                        <div className="meta">
                            <Link to={{
                                pathname: ` ${id.recipe.label}`,
                                state: id
                            }} >Cuisine : {id.recipe.cuisineType}</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="ui four column stackable grid content-wrapper">
            {recipes}
        </div>
    )
}

export default MainContent;
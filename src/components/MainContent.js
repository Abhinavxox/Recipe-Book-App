import React from 'react';
import '../index.css'

const MainContent = (props) => {
    console.log(props)
    const recipes = props.results.map((id) => {
        return (
            <div className='column rcard'>
                <div className="ui card">
                    <a className="image" href="#">
                        <img src={id.recipe.image} />
                    </a>
                    <div className="content">
                        <a className="header" href="#">{id.recipe.label}</a>
                        <div className="meta">
                            <a>Cuisine : {id.recipe.cuisineType}</a>
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
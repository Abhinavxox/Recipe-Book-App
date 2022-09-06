import React from 'react';
import '../index.css'

const MainContent = (props) => {
    console.log(props)
    const recipes = props.results.map((id) => {
        return (
            <div className="ui small image">
                <img alt="hi" src={id.recipe.image} />
            </div>
        )
    })
    return (
        <div className="ui two column stackable grid  content-wrapper">
            {recipes}
        </div>
    )
}

export default MainContent;
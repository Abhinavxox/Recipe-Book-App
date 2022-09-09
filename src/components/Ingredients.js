import React from 'react';
import '../index.css'

const Ingredients = (props) => {
    // const ingredients = props.id.recipe.ingredientLines.map((lines) => {
    //     return (
    //         <li><h3>{lines}</h3></li>
    //     )
    // })

    return (
        <div className='ui very padded segment'>
            <h1>INGREDIENTS</h1>
            <div className="ui divider"></div>

            <ul className="ui list">
                {/* {ingredients} */}
            </ul>
        </div>
    )
}

export default Ingredients;
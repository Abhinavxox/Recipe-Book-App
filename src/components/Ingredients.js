import React from 'react';
import '../index.css'

const Ingredients = (props) => {
    const id = props.id
    return (
        <div className='ui very padded segment'>
            <h1>INGREDIENTS</h1>
            <div className="ui divider"></div>

            <ul className="ui list">
                <li><h3>{id.strMeasure1}{id.strIngredient1}</h3></li>
                <li><h3>{id.strMeasure2}{id.strIngredient2}</h3></li>
                <li><h3>{id.strMeasure3}{id.strIngredient3}</h3></li>
                <li><h3>{id.strMeasure4}{id.strIngredient4}</h3></li>
                <li><h3>{id.strMeasure5}{id.strIngredient5}</h3></li>
                <li><h3>{id.strMeasure6}{id.strIngredient6}</h3></li>
                <li><h3>{id.strMeasure7}{id.strIngredient7}</h3></li>
                <li><h3>{id.strMeasure8}{id.strIngredient8}</h3></li>
                <li><h3>{id.strMeasure9}{id.strIngredient9}</h3></li>
                <li><h3>{id.strMeasure10}{id.strIngredient10}</h3></li>
                <li><h3>{id.strMeasure11}{id.strIngredient11}</h3></li>
                <li><h3>{id.strMeasure12}{id.strIngredient12}</h3></li>
                <li><h3>{id.strMeasure13}{id.strIngredient13}</h3></li>
                <li><h3>{id.strMeasure14}{id.strIngredient14}</h3></li>
                <li><h3>{id.strMeasure15}{id.strIngredient15}</h3></li>
                <li><h3>{id.strMeasure16}{id.strIngredient16}</h3></li>
                <li><h3>{id.strMeasure17}{id.strIngredient17}</h3></li>
                <li><h3>{id.strMeasure18}{id.strIngredient18}</h3></li>
                <li><h3>{id.strMeasure19}{id.strIngredient19}</h3></li>
                <li><h3>{id.strMeasure20}{id.strIngredient20}</h3></li>
            </ul>
        </div>
    )
}

export default Ingredients;
import React from 'react';
import '../index.css'

const ShortDescp = (props) => {
    const id = props.id
    const label = id.recipe.label.toUpperCase();
    const labels = id.recipe.healthLabels.map((label) => {
        return <div className="ui horizontal large label lbl">{label}</div>
    });
    return (
        <div >
            <h1>{label}</h1>
            <h3>CALORIES : {id.recipe.calories}</h3>
            <h3>CUISINE : {id.recipe.cuisineType}</h3>
            <h3>Nutrition level : {id.recipe.dietLabels}</h3>
            <h3>Dish type : {id.recipe.dishType}</h3>
            {labels}
        </div >
    )
}

export default ShortDescp;
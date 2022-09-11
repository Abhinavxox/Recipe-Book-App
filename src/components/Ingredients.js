import React from 'react';
import '../index.css'

const Ingredients = (props) => {
    const id = props.id


    return (
        <div className='ui very padded segment'>
            <h1>INGREDIENTS</h1>
            <div className="ui divider"></div>
            <h2>
                <div>{id.strMeasure1} {id.strIngredient1}</div>
                <div>{id.strMeasure2} {id.strIngredient2}</div >
                <div>{id.strMeasure3} {id.strIngredient3}</div >
                <div>{id.strMeasure4} {id.strIngredient4}</div >
                <div>{id.strMeasure5} {id.strIngredient5}</div >
                <div>{id.strMeasure6} {id.strIngredient6}</div >
                <div>{id.strMeasure7} {id.strIngredient7}</div >
                <div>{id.strMeasure8} {id.strIngredient8}</div >
                <div>{id.strMeasure9} {id.strIngredient9}</div >
                <div>{id.strMeasure10} {id.strIngredient10}</div >
                <div>{id.strMeasure11} {id.strIngredient11}</div >
                <div>{id.strMeasure12} {id.strIngredient12}</div >
                <div>{id.strMeasure13} {id.strIngredient13}</div >
                <div>{id.strMeasure14} {id.strIngredient14}</div >
                <div>{id.strMeasure15} {id.strIngredient15}</div >
                <div>{id.strMeasure16} {id.strIngredient16}</div >
                <div>{id.strMeasure17} {id.strIngredient17}</div >
                <div>{id.strMeasure18} {id.strIngredient18}</div >
                <div>{id.strMeasure19} {id.strIngredient19}</div >
                <div>{id.strMeasure20} {id.strIngredient20}</div >
            </h2>
        </div>
    )
}

export default Ingredients;
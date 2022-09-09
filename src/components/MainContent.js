import React from 'react';
import '../index.css'
import { Link } from 'react-router-dom';

const MainContent = (props) => {
    // if (props.results == null) {
    //     return (
    //         <div>NO RESULTS FOUND</div>
    //     )
    // }
    console.log(props)
    const recipes = props.results.map((id) => {
        return (
            <div className='column rcard'>
                <div className="ui card">
                    <Link className="image" to={{
                        pathname: `/recipe/${id.strMeal}`,
                        state: id
                    }} >
                        <img src={id.strMealThumb} alt="hi" />
                    </Link>
                    <div className="content">
                        <Link className="header" to={{
                            pathname: `/recipe/${id.strMeal}`,
                            state: id
                        }} >{id.strMeal}</Link>

                        <div className="meta">
                            <Link to={{
                                pathname: `/recipe/${id.strMeal}`,
                                state: id
                            }} >Cuisine : {id.strArea}</Link>
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
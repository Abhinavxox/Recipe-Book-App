import React from 'react';
import ShortDescp from './ShortDescp';
import Ingredients from './Ingredients';
import '../index.css'

const Recipe = (props) => {
    const id = props.history.location.state
    console.log(id)
    if (id === undefined) {
        return (
            <div>404 ERROR</div>
        )
    }
    return (
        <div>
            <div className="ui stackable grid very padded">
                <div className="left floated six wide column left-image">
                    <div className="ui segment" >
                        <img src={id.strMealThumb} alt="hi" width='100%' />
                    </div>
                </div>
                <div className="right floated ten wide column">
                    <div className="ui segment">
                        <ShortDescp id={id} />

                    </div>
                    <Ingredients id={id} />
                </div>
            </div>

        </div>
    )
}

export default Recipe;
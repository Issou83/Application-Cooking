import React from 'react';

const Cards = ({meal}) => {
    
    return (
        <div>
            <div className='meal-card'>
                <h2>{meal.strMeal}</h2>
                <p>Origin : {meal.strArea}</p>
                <img src={meal.strMealThumb} alt={"photo " + meal.srtMeal}></img>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    );
};

export default Cards;
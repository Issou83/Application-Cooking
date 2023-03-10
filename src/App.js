import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards';

const App = () => {
  const [mealsData, setMealsData] = useState([])
  const [inputSearch, setInputSearch] = useState("")
  useEffect (() => {
    axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch)
    .then((res) => setMealsData(res.data.meals))
  },[inputSearch]);


  return (
    <div className='app-container'>
      <h1>Cookig App</h1>
      <input type="text" placeholder="Tapez le nom d'un aliment (en anglais)"
      onChange={(e) => setInputSearch(e.target.value)}/>
      <div className='meals-container'>
        {mealsData.map((meal) => (
          <Cards key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
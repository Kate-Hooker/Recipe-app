//import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Recipe'

const App = () => {
  const APP_ID = process.env.APP_ID //
  const APP_KEY = process.env.APP_KEY //

  //const exampleReq = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`

  //const [counter, setCounter] = useState(0)

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('beans')

  useEffect(() => {
    //console.log('effect has been run')
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      //`https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`
      `https://api.edamam.com/search?q=${query}&_app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = (e) => {
    e.preventDefault() // stops page refresh for everyletter in search bar
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className='recipes'>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App

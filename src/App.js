//import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const APP_ID = process.env.APP_ID //
  const APP_KEY = process.env.APP_KEY //

  //const exampleReq = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`

  //const [counter, setCounter] = useState(0)

  useEffect(() => {
    //console.log('effect has been run')
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(
      //`https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`
      `https://api.edamam.com/search?q=tuna&_app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <form className="search-from">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default App

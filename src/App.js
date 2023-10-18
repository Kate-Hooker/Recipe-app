//import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const APP_ID = 'dcd610e5'
  const APP_KEY = '0ae5ba87c9bd4635c091a3a7963f6541'

  //const exampleReq = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`

  //const [counter, setCounter] = useState(0)

  useEffect(() => {
    //console.log('effect has been run')
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(
      //`https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`
      `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${APP_ID}&app_key=${APP_KEY}`
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

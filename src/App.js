//import logo from './logo.svg';
import React from 'react'
import './App.css'

const App = () => {
  const APP_ID = 'dcd610e5'
  const APP_KEY = '0ae5ba87c9bd4635c091a3a7963f6541'

  const exampleReq = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <form className="search-from">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1>Hello react</h1>
    </div>
  )
}

export default App

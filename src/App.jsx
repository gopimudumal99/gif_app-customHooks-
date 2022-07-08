// Random GIF V1
//! const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// Tag GIF V1
//! const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

import React from 'react'
import './App.css'
import Random from './components/Random_V2'
import Tag from './components/Tag_V2'

const App = () => {
  return (
    <>
    <h1>Random Gif Application</h1>
    <div className="main-container">
        <Random/>
        <Tag/>
    </div>
    </>
  )
}


export default App
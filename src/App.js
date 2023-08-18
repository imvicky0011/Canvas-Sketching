import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import RefDemo from './components/RefDemo';

function App() {
  const [can, setCan] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setCan(!can)
  }
  
  return <>
    <button onClick={handleClick}> Switch </button>
    {can && <Canvas/>}
    {!can && <RefDemo/>}
  </>

}

export default App;

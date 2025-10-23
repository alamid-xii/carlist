import React from 'react'

import './App.css'
import './components/MessageDisplay'
import PrimaryButton from './components/PrimaryButton.jsx'
import MessageDisplay from './components/MessageDisplay.jsx';
import { useState } from 'react';
//import PrimaryButton from './components/PrimaryButton';

function App() {
  const[count, setCount] = useState(0);
  return (
    <>
      <h>Hello, React!</h>
      <MessageDisplay message = "count"/>
      <PrimaryButton label = "Click Me" onclick={() => setCount((count) => count + 1)}/>  
    </>
  )
}

export default App

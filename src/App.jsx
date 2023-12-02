import Header from './components/header'
import './App.css'
import { useState } from 'react'
function App() {
  const [isInputFocused,setIsInputFocused]=useState(false);
  const handleInputFocus=()=>{
    setIsInputFocused(true);
    console.log("search bar focused")
  }
  const handleInputBlur=()=>{
    setIsInputFocused(false);
    console.log("search bar NOT focused")
  }
  return (
    <>
    <Header 
      isInputFocused={isInputFocused}
      handleInputFocus={handleInputFocus}
      handleInputBlur={handleInputBlur}
    />
    </>
  )
}

export default App

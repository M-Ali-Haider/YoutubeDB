import Header from './components/header'
import Sidebar from './components/sidebar';
import Tags from './components/tags.jsx';
import Main from './components/mai.jsx';
import './App.css'
import { useState } from 'react'
function App() {
  const [isInputFocused,setIsInputFocused]=useState(false);
  const [isSidebarOpen,setSidebarStatus]=useState(false);
  const handleInputFocus=()=>{
    setIsInputFocused(true);
  }
  const handleInputBlur=()=>{
    setIsInputFocused(false);
  }
  const handleSidebar=()=>{
    if(isSidebarOpen){
      setSidebarStatus(false);
    }
    else{
      setSidebarStatus(true);
    }
  }
  return (
    <>
    <Header 
      isInputFocused={isInputFocused}
      handleInputFocus={handleInputFocus}
      handleInputBlur={handleInputBlur}
      handleSidebar={handleSidebar}
    />
    <Sidebar
      isSidebarOpen={isSidebarOpen}
    />
    <Tags
      isSidebarOpen={isSidebarOpen}
    />
    <Main
      isSidebarOpen={isSidebarOpen}
    />
    </>
  )
}

export default App

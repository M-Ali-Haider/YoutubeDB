import Header from './components/header'
import Sidebar from './components/sidebar';
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
      console.log('Close Sidebar')
    }
    else{
      setSidebarStatus(true);
      console.log('Open Sidebar')
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
    </>
  )
}

export default App

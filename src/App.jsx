import Header from './components/header'
import Homepage from './components/homepage.jsx';
import VideoPage from './components/videopage.jsx';
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router>
      <Header 
        isInputFocused={isInputFocused}
        handleInputFocus={handleInputFocus}
        handleInputBlur={handleInputBlur}
        handleSidebar={handleSidebar}
      />
      <Routes>
        <Route path='/YoutubeDB' element={<Homepage isSidebarOpen={isSidebarOpen}/>}></Route>
        <Route path='/video' element={<VideoPage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

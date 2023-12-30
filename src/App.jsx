import Header from './components/header'
import Homepage from './components/homepage.jsx';
import VideoPage from './components/videopage.jsx';
import ShortsPage from './components/shorts/shortsPage.jsx';
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
function App() {

  const [isInputFocused,setIsInputFocused]=useState(false);
  const [isSidebarOpen,setSidebarStatus]=useState(false);
  const[isSignedIn,setSignInStatus]=useState(false);

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
  const resetSidebar=()=>{
    setSidebarStatus(false);
  }
  return (
    <>
      <Header 
        isInputFocused={isInputFocused}
        handleInputFocus={handleInputFocus}
        handleInputBlur={handleInputBlur}
        handleSidebar={handleSidebar}
        isSignedIn={isSignedIn}
      />
      <Routes>

        <Route path='/' element={<Homepage type="random" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar} isSignedIn={isSignedIn}/>}></Route>
        <Route path='/trends' element={<Homepage type="trend" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar} isSignedIn={isSignedIn}/>}></Route>
        <Route path='/subscriptions' element={<Homepage type="sub" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar} isSignedIn={isSignedIn}/>}></Route>

        <Route path='/video' element={<VideoPage isSidebarOpen={isSidebarOpen} isSignedIn={isSignedIn}/>}></Route>
        <Route path='/short' element={<ShortsPage/>}></Route>
      </Routes>
    </>
  )
}

export default App

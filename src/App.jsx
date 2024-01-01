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
      />
      <Routes>
        <Route path='/' element={<Homepage tagsPage={false} channelPage={false}  searchPage={false} signPage={false} type="random" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/trends' element={<Homepage tagsPage={false} channelPage={false} searchPage={false} signPage={false} type="trend" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/subscriptions' element={<Homepage tagsPage={false} channelPage={false} searchPage={false} signPage={false} type="sub" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/watchlater' element={<Homepage tagsPage={false} channelPage={false} searchPage={false} signPage={false} type="watch" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/yourvids' element={<Homepage tagsPage={false} channelPage={false} searchPage={false} signPage={false} type="yourvids" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/signup' element={<Homepage tagsPage={false} channelPage={false} searchPage={false} signPage={true} type="random" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/search' element={<Homepage tagsPage={false} channelPage={false} searchPage={true} signPage={false} type="random" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/channel/:id' element={<Homepage tagsPage={false} channelPage={true} searchPage={false} signPage={false} type="random" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/tags/:tag' element={<Homepage tagsPage={true} channelPage={false} searchPage={false} signPage={false} type="random" isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/video/:id' element={<VideoPage isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>}/>
        <Route path='/short' element={<ShortsPage/>}/>
      </Routes>
    </>
  )
}

export default App

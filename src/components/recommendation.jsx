import React, { useState,useEffect } from "react";
import RV from './videoTemplates/rv'
import axios from "axios";

export function Recommendation({tags,resetSidebar}) {

  const [videos,setVideos]=useState([])
  useEffect(()=>{
    const fetchVideos = async ()=>{
      const res = await axios.get(`/api/videos/rv/tags?tags=${tags}`)
      setVideos(res.data)
    }
    fetchVideos()
  },[tags])
  return (
  <div className="rv-grid">
    {videos.map(video=>(
      <RV key={video._id} video={video} resetSidebar={resetSidebar}/>
    ))}
  </div>
)}
  
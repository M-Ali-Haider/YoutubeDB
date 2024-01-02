import { useEffect, useState } from 'react'
import '../assets/styles/search.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import SU from './searchunit'
const Search =({resetSidebar})=>{
    const [videos,setVdeos]=useState([])
    const query = useLocation().search 
    useEffect(()=>{
        const fetchVideos = async ()=>{
            const res = await axios.get(`/api/videos/search${query}`)
            setVdeos(res.data)
        }
        fetchVideos()
    },[query])
    return(
        <>
        <div className={`searchpage ${videos.length===0?'no-results':''}`}>
            {videos.length===0?(
                <>
                    No Search Results
                </>
            ):(
                <>
                {videos.map(video=>(
                    <SU key={video._id} video={video} resetSidebar={resetSidebar}/>
                ))}
                </>
            )}
            
        </div>
        </>
    )
}
export default Search
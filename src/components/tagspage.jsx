import { useLocation } from 'react-router-dom'
import '../assets/styles/tagspage.css'
import { useState,useEffect } from 'react'
import GridVideo from './grid/gridVideo'
import axios from 'axios'
const TagsPage=({resetSidebar})=>{
    
    const path=useLocation().pathname.split('/')[2]

    const [videos,setVideos]=useState([])
    useEffect(() => {
        const fetchVideosFromTags = async () => {
            try {
                const res = await axios.get(`/api/videos/tags/${path}`);
                setVideos(res.data)
            } catch (error) {console.log("Error tagspage")}
        };
        fetchVideosFromTags();
    }, [path]);
    return(
        <>
        <div className="tagspage">
            <GridVideo videos={videos} resetSidebar={resetSidebar}/>
        </div>
        </>
    )
}
export default TagsPage
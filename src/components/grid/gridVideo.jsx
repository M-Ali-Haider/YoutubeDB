import { useEffect, useState } from 'react';
import Video from '../video';
import axios from 'axios';
const GridVideo=({isSidebarOpen,resetSidebar})=>{
    const [videos,setVideos]=useState([]);
    
    useEffect(()=>{
        axios.get('/api/videos/random')
            .then((res)=>{
                setVideos(res.data);
            })  
            .catch((err)=>{
                console.log(err);
            }) 
    })

    const maxVideos = isSidebarOpen ? 6 : 4;
    const displayedVideos = videos.slice(0, maxVideos);

    return(
        <>
        <div className="grid">
                {displayedVideos.map((video, index) => (
                    <Video key={`${video.id}-${index}`} resetSidebar={resetSidebar} />
                ))}

                
                {/* <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/> */}
            {isSidebarOpen ? (
                <>
                </>
            ): (
                <>
                {/* <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/> */}
                </>
            )}
        </div>
        </>
    )
}
export default GridVideo;
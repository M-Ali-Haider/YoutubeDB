import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/styles/grid.css'
import GridShorts from './gridShorts'
import GridVideo from './gridVideo';
import SignPage from '../signIn/signPage';
import Search from '../search';
const Grid=({searchPage,signPage,type,isSidebarOpen,resetSidebar})=>{



    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        const fetchVideos = async ()=>{
            const res = await axios.get(`/api/videos/${type}`)
            setVideos(res.data)
        }
        fetchVideos()
    },[type])
    const maxVideos = isSidebarOpen ? 6 : 4;
    const displayedVideos = videos.slice(0, maxVideos);
    const displayedVideos2 = videos.slice(maxVideos, maxVideos*2);
    return(
        <>
            <div className="grid-container">
                {signPage?(
                    <SignPage />
                ): searchPage?(
                    <Search resetSidebar={resetSidebar}/>
                ):(
                    <>
                    <GridVideo
                        videos={displayedVideos}
                        resetSidebar={resetSidebar}
                    />
                    <GridShorts
                        isSidebarOpen={isSidebarOpen}
                    />
                    <GridVideo
                        videos={displayedVideos2}
                        resetSidebar={resetSidebar}
                    />
                    <GridShorts
                        isSidebarOpen={isSidebarOpen}
                    />
                    </>
                )}
            </div>
            
        </>
    )
}
export default Grid;
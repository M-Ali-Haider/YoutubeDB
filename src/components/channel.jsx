import { useLocation } from 'react-router-dom'
import '../assets/styles/channel.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GridVideo from './grid/gridVideo'
const Channel = ({isSidebarOpen,resetSidebar})=>{

    const path=useLocation().pathname.split("/")[2]
    const [user,setUser]=useState({})
    const [totalVideos,setTotalVideos]=useState({})
    const [videos,setVideos]=useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get(`/api/users/find/${path}`)
                setUser(res.data)
                const rese = await axios.get(`/api/videos/count/${path}`)
                setTotalVideos(rese.data)
                const videos = await axios.get(`/api/videos/yourvids`)
                setVideos(videos.data)
            } catch (err) {console.log("Error in channel.jsx while fetching user")}
        }
        fetchData();
    },[path])

    return(
        <>
            <div className={`channel-page ${isSidebarOpen?'channel-page-sidebar':''}`}>

                {/* Cover Photo */}
                <div className="cover-photo">
                    <img src={user.img} alt="" />
                </div>

                {/* PFP, NAME AND OTHER STUFF  */}
                <div className="user-info">
                    <div className="channel-pfp"><img src={user.img} alt="" /></div>
                    <div className="channel-rest">
                        <div className="channel-name">{user.name}</div>
                        <div className="channel-info">
                            <div className="channel-email">{user.email}</div>
                            <div className="vid-dot"></div>
                            <div className="channel-subs">{user.subscribers} subscribers</div>
                            <div className="vid-dot"></div>
                            <div className="channel-total-vids">{totalVideos.videoCount} videos</div>
                        </div>
                    </div>
                </div>

                <div className="channel-vids-grid">
                    <h1>Videos</h1>
                    <GridVideo videos={videos} resetSidebar={resetSidebar}/>
                </div>
            </div>
            
        </>
    )
}
export default Channel

import { useSelector } from 'react-redux'
import '../../assets/styles/playlist.css'
import PlaylistUnit from './playlistUnit'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Playlist=()=>{

    const { currentUser } = useSelector((state) => state.user);
    const [videos,setVideos]=useState([])
    if(currentUser){
        useEffect(()=>{
            const fetchMix= async()=>{
                try{
                    const res= await axios.get(`/api/videos/cv/${currentUser._id}`)
                    setVideos(res.data);
                }
                catch(err){console.log("Error in fetching Mix")}
            }
            fetchMix()
        },[currentUser._id])
    }

    return(
        <>
        {
            currentUser?(
                <div className="playlist">
                    <div className="playlist-heading">
                        <div className="playlist-title">Your Mix</div>
                    </div>
                    <div className="playlist-videos">
                        {videos.map(video=>(
                            <PlaylistUnit key={video._id} video={video}/>
                        ))}
                    </div>
                </div>
            ):null
        }
        </>
    )
}
export default Playlist
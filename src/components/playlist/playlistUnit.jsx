import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const PlaylistUnit=({video})=>{
    const [channel,setChannel]=useState('')
    useEffect(()=>{
        const fetchChannel = async ()=>{
            const res = await axios.get(`/api/users/find/${video.userId}`)
            setChannel(res.data)
        }
        fetchChannel()
    },[video.userId])
    return(
        <>
        <Link to={`/video/${video._id}`} className="playlist-unit">
            <div className="playlist-image-div">
                <img src={video.imgUrl} alt="" />
            </div>
            <div className="rv-details">
                <div className="rv-pfp">
                    <img src={channel.img} alt="" />
                </div>
                <div className="rv-rest">
                    <div className="rv-title">{video.title}</div>
                    <div className="rv-author">{channel.name}</div>
                </div>
            </div>
        </Link>
        </>
    )
}
export default PlaylistUnit;
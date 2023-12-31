import '../../assets/styles/rv.css'
import pfp from '../../assets/images/pfp.jpeg'
import noThumbnail from '../../assets/images/noThumbnail.webp'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'


const RV=({video,resetSidebar})=>{

    const [channel,setChannel]=useState({});
    useEffect(()=>{
        const fetchChannel = async ()=>{
            const res = await axios.get(`/api/users/find/${video.userId}`)
            setChannel(res.data)
        }
        fetchChannel()
    },[video.userId])


    const [isImgSrc,setImgSrc]=useState(video.imgUrl);
    const handleSrcError=()=>{
        setImgSrc(noThumbnail)
    }

    return(
        <>
        <Link to={`/video/${video._id}`}>
        <div className="rv-unit" onClick={resetSidebar}>
            <div className="rv-image-div">
                <img src={isImgSrc} alt="" onError={handleSrcError}/>
            </div>
            <div className="rv-details">
                <div className="rv-pfp">
                    <img src={pfp} alt="" />
                </div>
                <div className="rv-rest">
                    <div className="rv-title">{video.title}</div>
                    <div className="rv-author">{channel.name}</div>
                    <div className="rv-stats">
                        <div className="rv-views">{video.views} views</div>
                        <div className="rm-time-elapsed">{format(video.createdAt)}</div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
        </>
    )
}
export default RV
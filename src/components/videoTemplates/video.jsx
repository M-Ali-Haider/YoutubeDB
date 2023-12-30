import '../../assets/styles/video.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import pfp from '../../assets/images/pfp.jpeg'
import noThumbnail from '../../assets/images/noThumbnail.webp'
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
const Video=({resetSidebar,video})=>{



    const [channel,setChannel]=useState({});
    useEffect(()=>{
        const fetchChannel = async ()=>{
            const res = await axios.get(`/api/users/find/${video.userId}`)
            setChannel(res.data)
        }
        fetchChannel()
    },[video.userId])
    
    
    
    const [thumbnailSrc, setThumbnailSrc] = useState(video.imgUrl);
    const handleThumbnailError = () => {
        setThumbnailSrc(noThumbnail);
    };




    return(
        <>
        <Link onClick={resetSidebar} to="/video">
            <div className="video">
                <div className="thumbnail">
                    <div className="vid-tt">3:00</div>
                    <img src={thumbnailSrc} onError={handleThumbnailError} alt="No Image Found" />
                </div>
                <div className="vid-details">
                    <div className="vid-pfp">
                        <img src={pfp} alt="bruh" />
                    </div>
                    <div className="vid-info">
                        <div className="vid-title">{video.title}</div>
                        <div className="vid-info-er">
                            <div className="vid-author-div">
                                <div className="vid-author">{channel.name}</div>
                                <svg className="vid-verification" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                            </div>
                            <div className="vid-stats-div">
                                <div className="vid-views">{video.views} views</div>
                                <div className="vid-dot"></div>
                                <div className="vid-time-elapsed">{format(video.createdAt)}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}
export default Video;
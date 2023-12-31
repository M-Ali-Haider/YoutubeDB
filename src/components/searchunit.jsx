import { useEffect, useState } from "react";
import { format } from "timeago.js";
import pfp from '../assets/images/pfp.webp'
import noThumbnail from '../assets/images/noThumbnail.webp'
import axios from "axios";
import { Link } from "react-router-dom";

const SU=({video,resetSidebar})=>{
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

    const imgSrc = channel.img? channel.img : pfp
    return(
        <>
        <Link to={`/video/${video._id}`}>
            <div className="su" onClick={resetSidebar}>
                <div className="su-left"><img src={thumbnailSrc} onError={handleThumbnailError} alt="" /></div>
                <div className="su-right">
                    <div className="su-title">{video.title}</div>
                    <div className="su-stats">
                        <span>{video.views} views</span>
                        <span className="vid-dot"></span>
                        <span>{format(video.createdAt)}</span>
                    </div>
                    <div className="su-user-details">
                        <div className="su-pfp"><img src={imgSrc} alt="" /></div>
                        <div className="su-name">{channel.name}</div>
                    </div>
                    <p className="su-desc">{video.desc}</p>
                </div>
            </div>
        </Link>
        </>
    )
}
export default SU;
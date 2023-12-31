import { Recommendation } from './recommendation';
import '../assets/styles/videopage.css'
import pfp from '../assets/images/pfp.jpeg'
import disliker from '../assets/images/like/dislike.svg'
import dislikeactive from '../assets/images/like/dislikeactive.svg'
import share from '../assets/images/share.svg'
import TagsSwiper from './tags/tagsSwiper'
import SidebarOpen from './sidebar/sidebaropen'
import CommentSection from './comments/commentsec'
import ShortsVP from './shorts/shortsVP'
import Playlist from './playlist/playlist'
import threedots from '../assets/images/threedots.svg'
import download from '../assets/images/download.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchSuccess, like, dislike } from '../redux/videoSlice'
import { format } from 'timeago.js'
import { subscription } from '../redux/userSlice'

const VideoPage=({isSidebarOpen})=>{
    const tagsNumber=4.8;
    


    const { currentUser } = useSelector((state) => state.user);
    const { currentVideo } = useSelector((state) => state.video);
    const dispatch = useDispatch();
    const path = useLocation().pathname.split("/")[2];
    const [channel, setChannel] = useState({});
    const imgSrc = channel && channel.img ? channel.img : pfp;
    useEffect(() => {
        const fetchData = async () => {
        try {
            const videoRes = await axios.get(`/api/videos/find/${path}`);
            const channelRes = await axios.get(`/api/users/find/${videoRes.data.userId}`);
            setChannel(channelRes.data);
            dispatch(fetchSuccess(videoRes.data));
        } catch (err) {}
        };
        fetchData();
    }, [path, dispatch]);

    const handleLike = async ()=>{
        await axios.put(`/api/users/like/${currentVideo._id}`)
        dispatch(like(currentUser._id))
    }
    const handleDislike = async ()=>{
        await axios.put(`/api/users/dislike/${currentVideo._id}`)
        dispatch(dislike(currentUser._id))
    }

    const handleSub= async()=>{
        currentUser.subscribedUsers.includes(channel._id)?
        await axios.put(`/api/users/unsub/${channel._id}`):
        await axios.put(`/api/users/sub/${channel._id}`)
        dispatch(subscription(channel._id))
    }




    return(
        <>
        <div className={`slideSidebar ${isSidebarOpen ? 'slideSidebarOpen' : ''}`}>
            <SidebarOpen />
        </div>
        <div className="videopage">
            <div className="videopage-helper">
                <div className="videopage-first">
                    {/* Video Url */}
                    <video className='mv' src={currentVideo.videoUrl} controls></video>
                    <div className="mv-mobile-view-something">
                        <h2 className='mv-title'>{currentVideo.title}</h2>
                        <div className="mv-buttons">
                            <div className="mv-buttons-first">
                                <div className='mv-buttons-first-helper'>
                                    <div className="mv-pfp"><img src={imgSrc} alt="" /></div>
                                    <div className="mv-channel">
                                        <div className="mv-channel-name">{channel.name}</div>
                                        <div className="mv-subs">{channel.subscribers} subscribers</div>
                                    </div>
                                </div>

                                {/* Subscribe */}
                                <div onClick={handleSub} className={`mv-subscribe-button ${currentUser.subscribedUsers?.includes(channel._id)?'mv-subscribe-button-active':''}`}>
                                    {currentUser.subscribedUsers?.includes(channel._id)?"Subscribed":"Subscribe"}
                                </div>
                            </div>
                            <div className="mv-buttons-second">
                                <div className="mv-button">

                                    {/* Like */}
                                    <div className="mv-like mv-total-like" onClick={handleLike}>
                                        {currentVideo.likes?.includes(currentUser._id)
                                            ?
                                                <img className='rotate-like' src={dislikeactive} alt="" /> 
                                            :
                                                <img className='rotate-like' src={disliker} alt="" /> 
                                        }
                                        <div>{currentVideo.likes?.length}</div>
                                    </div>

                                    {/* Dislike */}
                                    <div className="mv-like" onClick={handleDislike}>
                                        {currentVideo.dislikes?.length >=1 ?
                                            <div>{currentVideo.dislikes?.length}</div>
                                         :null}
                                        {currentVideo.dislikes?.includes(currentUser._id)
                                            ?
                                                <img src={dislikeactive} alt="" />
                                            :
                                                <img src={disliker} alt="" />
                                        }
                                    </div>
                                </div>
                                <div className="mv-button">
                                    <div className="mv-like">
                                        <img src={share} alt="" />
                                        <div>Share</div>
                                    </div>
                                </div>
                                <div className="mv-button">
                                    <div className="mv-like">
                                        <img src={download} alt="" />
                                        <div>Download</div>
                                    </div>
                                </div>
                                <div className="mv-button">
                                    <div className="mv-dots">
                                        <img src={threedots} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mv-desc">
                            <div className="mv-desc-analytics">
                                <div className="mv-desc-views">{currentVideo.views} views</div>
                                <div className="mv-desc-time-elapsed">{format(currentVideo.createdAt)}</div>
                            </div>
                            <p>
                                {currentVideo.desc}
                            </p>
                        </div>
                        <div className="mv-comments">
                            <CommentSection videoId={currentVideo._id}/>
                        </div>
                    </div>
                </div>
                <div className="videopage-second">
                    <Playlist />
                    <div className="videopage-second-tags">
                        <TagsSwiper tagsNumber={tagsNumber}/>
                    </div>
                    <Recommendation/>
                    <div className="vs-shorts-box">
                        <h3 className='shorts-vs-grid-heading'>Shorts</h3>
                        <div className="shorts-vs-grid">
                            <ShortsVP/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default VideoPage;
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
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { fetchSuccess, like, dislike, incrementView } from '../redux/videoSlice'
import { format } from 'timeago.js'
import { subscription, watchlater } from '../redux/userSlice'
import save from '../assets/images/save.svg'

const VideoPage=({isSidebarOpen,resetSidebar})=>{

    const tagsNumber=4.8;
    const { currentUser } = useSelector((state) => state.user);
    const { currentVideo } = useSelector((state) => state.video);

    const [video,setVideo]=useState({});
    
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
            setVideo(videoRes.data);
            dispatch(fetchSuccess(videoRes.data));
        } catch (err) {}
        };
        fetchData();
    }, [path, dispatch]);

    currentVideo?console.log(currentVideo._id):console.log('The Bug is Back')

    const handleLike = async ()=>{
        await axios.put(`/api/users/like/${currentVideo._id}`)
        // await axios.put(`/api/users/like/${video._id}`)
        dispatch(like(currentUser._id))
    }
    const handleDislike = async ()=>{
        await axios.put(`/api/users/dislike/${currentVideo._id}`)
        // await axios.put(`/api/users/dislike/${video._id}`)
        dispatch(dislike(currentUser._id))
    }

    const handleSub= async()=>{
        if(currentUser){
            currentUser.subscribedUsers.includes(channel._id)?
            await axios.put(`/api/users/unsub/${channel._id}`):
            await axios.put(`/api/users/sub/${channel._id}`)
            dispatch(subscription(channel._id))
        }
    }
    const handleView = async ()=>{
        await axios.put(`/api/videos/view/${currentVideo._id}`)
        // await axios.put(`/api/videos/view/${video._id}`)
        dispatch(incrementView());
    }
    useEffect(()=>{
        handleView();
    },[currentVideo._id],dispatch)
    // },[video._id],dispatch)
    // Dots Functionality
    const [isDots,setDots]=useState(false);
    const dotsContainerRef = useRef(null);
    const handleDots=()=>{
        setDots(!isDots);
    }
    const closeDots=()=>{
        setDots(false)
    }
    const videoRef = useRef(null);
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.volume = 0.1; 
      }
    }, []);
    const handleOutsideClick = (event) => {
        if (dotsContainerRef.current && !dotsContainerRef.current.contains(event.target)) {
        setDots(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const handleWatchLater= async()=>{
        if(currentUser){
            currentUser.watchLater.includes(currentVideo._id)?
            // currentUser.watchLater.includes(video._id)?
            await axios.put(`/api/users/watchlater/remove/${currentVideo._id}`):
            // await axios.put(`/api/users/watchlater/remove/${videoideo._id}`):
            await axios.put(`/api/users/watchlater/add/${currentVideo._id}`)
            // await axios.put(`/api/users/watchlater/add/${videoideo._id}`)
            dispatch(watchlater(currentVideo._id));
            // dispatch(watchlater(videoideo._id));
        }
    }
    const majorDots=()=>{
        handleWatchLater()
        closeDots()
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
                    {/* <video ref={videoRef} className='mv' src={currentVideo.videoUrl} controls autoPlay={true}></video> */}
                    <video ref={videoRef} className='mv' src={video.videoUrl} controls autoPlay={true}></video>
                    <div className="mv-mobile-view-something">
                        {/* <h2 className='mv-title'>{currentVideo.title}</h2> */}
                        <h2 className='mv-title'>{video.title}</h2>
                        <div className="mv-buttons">
                            <div className="mv-buttons-first">
                                <div className='mv-buttons-first-helper'>
                                    <div className="mv-pfp"><img src={imgSrc} alt="" /></div>
                                    <div className="mv-channel">
                                        <div className="mv-channel-name">{channel.name}</div>
                                        <div className="mv-subs">{channel.subscribers} subscribers</div>
                                    </div>
                                </div>
                                <div 
                                    onClick={handleSub} 
                                    className={
                                     `mv-subscribe-button ${currentUser && currentUser.subscribedUsers?.includes(channel._id) 
                                     ? 'mv-subscribe-button-active' : ''}`}
                                >
                                    {currentUser && currentUser.subscribedUsers?.includes(channel._id) ? "Subscribed" : "Subscribe"}
                                </div>
                            </div>
                            <div className="mv-buttons-second">
                                <div className="mv-button">

                                    {/* Like */}
                                    <div className="mv-like mv-total-like" onClick={handleLike}>
                                        {/* {currentUser && video.likes?.includes(currentUser._id) */}
                                        {currentUser && currentVideo.likes?.includes(currentUser._id)
                                            ?
                                                <img className='rotate-like' src={dislikeactive} alt="" /> 
                                            :
                                                <img className='rotate-like' src={disliker} alt="" /> 
                                        }
                                        {/* <div>{video.likes?.length}</div> */}
                                        <div>{currentVideo.likes?.length}</div>
                                    </div>

                                    {/* Dislike */}
                                    <div className="mv-like" onClick={handleDislike}>
                                        {currentVideo.dislikes?.length >=1 ?
                                        // {video.dislikes?.length >=1 ?
                                            // <div>{video.dislikes?.length}</div>
                                            <div>{currentVideo.dislikes?.length}</div>
                                         :null}
                                        {/* {currentUser && video.dislikes?.includes(currentUser._id) */}
                                        {currentUser && currentVideo.dislikes?.includes(currentUser._id)
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
                                {currentUser?(
                                    <div className="mv-button over-not-hidden">
                                        <div className="mv-dotser">
                                            <img src={threedots} alt="" onClick={handleDots} />
                                            {isDots?(
                                                <div ref={dotsContainerRef} className="mv-dots-abs">
                                                    <div onClick={majorDots} className="mv-dots-menu-unit">
                                                        <img src={save} alt="" />
                                                        <span>{currentUser && currentUser.watchLater.includes(currentVideo._id)?"Remove from Watch Later":"Save"}</span>
                                                        {/* <span>{currentUser && currentUser.watchLater.includes(video._id)?"Remove from Watch Later":"Save"}</span> */}
                                                    </div>
                                                </div>  
                                            ):null}
                                        </div>
                                    </div>
                                ):null}
                            </div>
                        </div>
                        <div className="mv-desc">
                            <div className="mv-desc-analytics">
                                {/* <div className="mv-desc-views">{currentVideo.views} views</div> */}
                                <div className="mv-desc-views">{video.views} views</div>
                                {/* <div className="mv-desc-time-elapsed">{format(currentVideo.createdAt)}</div> */}
                                <div className="mv-desc-time-elapsed">{format(video.createdAt)}</div>
                            </div>
                            <p>
                                {/* {currentVideo.desc} */}
                                {video.desc}
                            </p>
                        </div>
                        <div className="mv-comments">
                            <CommentSection videoId={currentVideo._id}/>
                            {/* <CommentSection videoId={video._id}/> */}
                        </div>
                    </div>
                </div>
                <div className="videopage-second">
                    <Playlist />
                    <div className="videopage-second-tags">
                        <TagsSwiper  tagsNumber={tagsNumber}/>
                    </div>
                    {/* <Recommendation tags={currentVideo.tags} resetSidebar={resetSidebar}/> */}
                    <Recommendation tags={video.tags} resetSidebar={resetSidebar}/>
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
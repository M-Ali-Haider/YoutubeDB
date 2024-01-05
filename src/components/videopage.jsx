import { Recommendation } from './recommendation';
import '../assets/styles/videopage.css'
import TagsSwiper from './tags/tagsSwiper'
import SidebarOpen from './sidebar/sidebaropen'
import CommentSection from './comments/commentsec'
import Playlist from './playlist/playlist'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchSuccess,incrementView } from '../redux/videoSlice'
import { format } from 'timeago.js'
import VideoPlayer from './vpComp/videoplayer';
import VideoDetails from './vpComp/videoDetails';

const VideoPage=({isSidebarOpen,resetSidebar})=>{

    const tagsNumber=4.8;
    const { currentVideo } = useSelector((state) => state.video);
    const [video,setVideo]=useState({});
    const dispatch = useDispatch();
    const path = useLocation().pathname.split("/")[2];
    const [channel, setChannel] = useState({});
    


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

    
    useEffect(()=>{
        const handleView = async ()=>{
        await axios.put(`/api/videos/view/${currentVideo._id}`)
        dispatch(incrementView());
    }
        handleView();
    },[currentVideo?._id],dispatch)

    
    
    
    return(
        <>
        <div className={`slideSidebar ${isSidebarOpen ? 'slideSidebarOpen' : ''}`}>
            <SidebarOpen />
        </div>
        {currentVideo?(
            <div className="videopage">
                <div className="videopage-helper">
                    <div className="videopage-first">

                        <VideoPlayer videoUrl={video.videoUrl}/>

                        <div className="mv-mobile-view-something">
                            <h2 className='mv-title'>{video.title}</h2>

                            <VideoDetails channel={channel} />

                            <div className="mv-desc">
                                <div className="mv-desc-analytics">
                                    <div className="mv-desc-views">{video.views} views</div>
                                    <div className="mv-desc-time-elapsed">{format(video.createdAt)}</div>
                                </div>
                                <p>{video.desc}</p>
                            </div>
                            <div className="mv-comments">
                                <CommentSection videoId={currentVideo._id}/>
                            </div>
                        </div>
                    </div>
                    <div className="videopage-second">
                        <Playlist />
                        <div className="videopage-second-tags">
                            <TagsSwiper  tagsNumber={tagsNumber}/>
                        </div>

                        <Recommendation tags={video.tags} resetSidebar={resetSidebar}/>
                        
                        {/* <div className="vs-shorts-box">
                            <h3 className='shorts-vs-grid-heading'>Shorts</h3>
                            <div className="shorts-vs-grid">
                                <ShortsVP/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        ):(
            <>Loading...</>
        )}
        </>
    )
}
export default VideoPage;
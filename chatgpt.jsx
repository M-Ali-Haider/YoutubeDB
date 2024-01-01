import { Recommendation } from './recommendation';
import axios from 'axios'
import { fetchSuccess, like, dislike, incrementView } from '../redux/videoSlice'
import { format } from 'timeago.js'
import { subscription } from '../redux/userSlice'


const VideoPage=({isSidebarOpen,resetSidebar})=>{
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
        if(currentUser){
            currentUser.subscribedUsers.includes(channel._id)?
            await axios.put(`/api/users/unsub/${channel._id}`):
            await axios.put(`/api/users/sub/${channel._id}`)
            dispatch(subscription(channel._id))
        }
    }

    const handleView = async ()=>{
        await axios.put(`/api/videos/view/${currentVideo._id}`)
        dispatch(incrementView());
    }
    useEffect(()=>{
        handleView();
    },[currentVideo._id],dispatch)

    return(
        <>
        <div className={`slideSidebar ${isSidebarOpen ? 'slideSidebarOpen' : ''}`}>
            <SidebarOpen />
        </div>
        <div className="videopage">
            <div className="videopage-helper">
                <div className="videopage-first">
                    {/* Video Url */}
                    <video ref={videoRef} className='mv' src={currentVideo.videoUrl} controls autoPlay={true}></video>
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
                                        {currentUser && currentVideo.likes?.includes(currentUser._id)
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
                                        {currentUser && currentVideo.dislikes?.includes(currentUser._id)
                                            ?
                                                <img src={dislikeactive} alt="" />
                                            :
                                                <img src={disliker} alt="" />
                                        }
                                    </div>
                                </div>
                                <div className="mv-button over-not-hidden">
                                    <div className="mv-dotser">
                                        <img src={threedots} alt="" onClick={handleDots} />
                                        {isDots?(
                                            <div ref={dotsContainerRef} className="mv-dots-abs">
                                                {/* Save Button thats add to Watch Later */}
                                                <div onClick={closeDots} className="mv-dots-menu-unit"><img src={save} alt="" /><span>Save</span></div>
                                            </div>  
                                        ):null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default VideoPage;
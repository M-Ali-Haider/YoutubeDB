import disliker from '../../assets/images/like/dislike.svg'
import dislikeactive from '../../assets/images/like/dislikeactive.svg'
import share from '../../assets/images/share.svg'
import save from '../../assets/images/save.svg'
import threedots from '../../assets/images/threedots.svg'
import download from '../../assets/images/download.svg'
import { useDispatch, useSelector } from 'react-redux'
import pfp from '../../assets/images/pfp.jpeg'
import { subscription,watchlater } from '../../redux/userSlice'
import { like, dislike } from '../../redux/videoSlice'
import axios from 'axios'
import { useRef, useState } from 'react'



const VideoDetails=({channel})=>{

    const { currentUser } = useSelector((state) => state.user);
    const { currentVideo } = useSelector((state) => state.video);
    const imgSrc = channel && channel.img ? channel.img : pfp;
    const [isDots,setIsDots]=useState(false)
    const dispatch=useDispatch();

    const dotsContainerRef=useRef(null)


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

    const handleWatchLater= async()=>{
        if(currentUser){
            currentUser.watchLater.includes(currentVideo._id)?
            await axios.put(`/api/users/watchlater/remove/${currentVideo._id}`):
            await axios.put(`/api/users/watchlater/add/${currentVideo._id}`)
            dispatch(watchlater(currentVideo._id));
        }
    }

    const handleDots=()=>{
        isDots?setIsDots(false):setIsDots(true);
    }

    const closeDots=()=>{
        setIsDots(false);
    }

    const majorDots=()=>{
        handleWatchLater()
        closeDots()
    }



    return(
        <>
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
                        <div className="mv-like mv-total-like" onClick={handleLike}>
                            {currentUser && currentVideo.likes?.includes(currentUser._id)
                                ?
                                    <img className='rotate-like' src={dislikeactive} alt="" /> 
                                :
                                    <img className='rotate-like' src={disliker} alt="" /> 
                            }
                            <div>{currentVideo.likes?.length}</div>
                        </div>
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
                                        </div>
                                    </div>  
                                ):null}
                            </div>
                        </div>
                    ):null}
                </div>
            </div>
        </>
    )
}
export default VideoDetails
import { useEffect, useState } from 'react'
import like from '../../assets/images/like.svg'
import pfp from '../../assets/images/pfp.jpeg'
import axios from 'axios'
import { format } from 'timeago.js'
const Comment=({comment})=>{

    const [channel,setChannel]=useState([])
    useEffect(()=>{
        const fetchComment = async ()=>{
            const res = await axios.get(`/api/users/find/${comment.userId}`)
            setChannel(res.data)
        }
        fetchComment();
    },[comment.userId])

    const imgSrc = channel && channel.img ? channel.img : pfp;
    

    return(
        <>
        <div className="comment-unit">
            <div className="comment-pfp">
                <img src={imgSrc} alt="" />
            </div>
            <div className="cu-helper">
                <div className="cu-first">
                    <div className="comment-id">{channel.name}</div>
                    <div className="comment-time-elapsed">{format(comment.createdAt)}</div>
                </div>
                <p className='cu-second'>
                    {comment.desc}
                </p>
                <div className="cu-third">
                    <div className="cu-third-first">
                        <div className="cu-like">
                            <img src={like} alt="" />
                            <div className='cu-total-likes'>6</div>
                        </div>
                        <div className="cu-dislike"><img src={like} alt="" /></div>
                    </div>
                    {/* <div className="cu-reply">Reply</div> */}
                </div>
            </div>
        </div>
        </>
    )
}
export default Comment;
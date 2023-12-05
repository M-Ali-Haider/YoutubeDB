import like from '../assets/images/like.svg'
import pfp from '../assets/images/pfp.jpeg'
const Comment=()=>{
    return(
        <>
        <div className="comment-unit">
            <div className="comment-pfp">
                <img src={pfp} alt="" />
            </div>
            <div className="cu-helper">
                <div className="cu-first">
                    <div className="comment-id">@Bruhmius</div>
                    <div className="comment-time-elapsed">4 hours ago</div>
                </div>
                <p className='cu-second'>Wow that was the best Video I've Seen in my life, I'm already Siraiki so cant wait to get it on with my own CR.</p>
                <div className="cu-third">
                    <div className="cu-third-first">
                        <div className="cu-like">
                            <img src={like} alt="" />
                            <div className='cu-total-likes'>6</div>
                        </div>
                        <div className="cu-dislike"><img src={like} alt="" /></div>
                    </div>
                    <div className="cu-reply">Reply</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Comment;
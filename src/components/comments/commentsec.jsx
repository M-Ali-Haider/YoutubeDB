import '../../assets/styles/comments.css'
import pfp from '../../assets/images/pfp.jpeg'
import sortby from '../../assets/images/sortby.svg'
import Comment from './comment'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import PostComment from './commentPost'

const CommentSection=({videoId})=>{

    const { currentUser } = useSelector((state) => state.user);
    const imgSrc = currentUser && currentUser.img ? currentUser.img : pfp;
    
    const [comments,setComments]=useState([])
    useEffect(()=>{
        const fetchComments = async ()=>{
            try {
                const res = await axios.get(`/api/comments/${videoId}`)
                setComments(res.data)
            } catch (err) {}
        }
        fetchComments()
    },[videoId])
    const handleCommentSubmit = async (newComment) => {
        try {
          await axios.post('/api/comments', { ...newComment, videoId });
          const res = await axios.get(`/api/comments/${videoId}`);
          setComments(res.data);
        } catch (err) {
          console.error('Error posting comment:', err);
        }
      };
    return(
        <>
        <div className="comment-container">
            <div className="comments-analytics">
                <h2 className="comments-total">{comments.length} Comments</h2>
                <div className="comments-sort">
                    <img src={sortby} alt="" />
                    <span>Sort by</span>
                </div>
            </div>
            {currentUser?(
                <>
                <div className="comments-add-container">
                    <div className="comment-pfp">
                        <img src={imgSrc} alt="" />
                    </div>
                    <PostComment videoId={videoId} onCommentSubmit={handleCommentSubmit}/>
                </div>
                </>
            ):null}
            <div className="display-comments">
                {comments.map(comment=>(
                    <Comment key={comment._id} comment={comment}/>
                ))}
            </div>
        </div>
        </>
    )
}
export default CommentSection;
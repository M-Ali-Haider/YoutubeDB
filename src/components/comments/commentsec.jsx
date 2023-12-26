import '../../assets/styles/comments.css'
import pfp from '../../assets/images/pfp.jpeg'
import sortby from '../../assets/images/sortby.svg'
import Comment from './comment'
const CommentSection=()=>{
    return(
        <>
        <div className="comment-container">
            <div className="comments-analytics">
                <h2 className="comments-total">71 Comments</h2>
                <div className="comments-sort">
                    <img src={sortby} alt="" />
                    <span>Sort by</span>
                </div>
            </div>
            <div className="comments-add-container">
                <div className="comment-pfp">
                    <img src={pfp} alt="" />
                </div>
                <input className='add-a-comment' type="text" placeholder='Add a comment' />
            </div>
            <div className="display-comments">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
        </>
    )
}
export default CommentSection;
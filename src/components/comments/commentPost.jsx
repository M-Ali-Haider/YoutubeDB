import { useState } from "react";

const PostComment = ({videoId, onCommentSubmit}) => {
  const [isCommentOptionAppear, setCommentOptionStatus] = useState(false);
  const [commentText, setCommentText] = useState("");

  const appearCommentBtn = () => {
    setCommentOptionStatus(true);
  };

  const hideCommentBtn = () => {
    setCommentOptionStatus(false);
    setCommentText("");
  };
  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onCommentSubmit({ desc: commentText, videoId });
    setCommentText('');
  };

  return (
    <form action="" className={`comment-form`}>
      <input className={`add-a-comment`} type="text" placeholder="Add a comment" onFocus={appearCommentBtn} value={commentText} onChange={handleChange}
      />
      {isCommentOptionAppear ? (
        <>
          <div className="comment-options">
            <button className="cancel-comment" onClick={hideCommentBtn}>
              Cancel
            </button>
            <button 
                className={`comment-comment ${commentText.trim() === "" ? "comment-comment-blocked" : ""}`} 
                disabled={commentText.trim() === ""}
                onClick={handleSubmit}
            >
              Comment
            </button>
          </div>
        </>
      ) : null}
    </form>
  );
};

export default PostComment;

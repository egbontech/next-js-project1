import React from "react";
import { MdSend } from "react-icons/Md";
import { useState } from "react";

const CommentInput = () => {
  const [comment, setComment] = useState("");

  const updateComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="comment-input-image-container">
      <div className="image">
        <img src="/assets/images/p.jpg" alt="" />
      </div>
      <div className="comment-input">
        <input
          type="text"
          placeholder="Add a Comment..."
          onChange={updateComment}
        />
        {comment.trim().length > 0 && (
          <button>
            <MdSend className="i" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentInput;

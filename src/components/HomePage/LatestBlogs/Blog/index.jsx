import React from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs"; // Import dayjs
import relativeTime from "dayjs/plugin/relativeTime"; // Import the relativeTime plugin
import "./index.m.css";

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

const Blog = ({ title, subTitle, image, author, updatedAt, id, likes }) => {
  const navigate = useNavigate();

  // Format the date using dayjs
  const formattedDate = dayjs(updatedAt).format("MMMM D, YYYY");

  return (
    <div className="blog-card" onClick={() => navigate(`/blog/${id}`)}>
      <div className="blog-image-container">
        <img className="blog-image" src={image} alt="Blog" />
      </div>
      <div className="blog-content">
        <div className="blog-text">
          <h3 className="blog-title-main">{title}</h3>
          <p className="blog-subtitle-main">{subTitle}</p>
          <div className="blog-author-date">
            <div className="blog-author-date-inner">
              <div className="blog-author">{"Mr. Mahendra"}</div>
              <div className="blog-date">{formattedDate}</div>
            </div>
            <div className="blog-like">❤️ {likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

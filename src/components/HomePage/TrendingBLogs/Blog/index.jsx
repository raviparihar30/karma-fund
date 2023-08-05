import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.m.css";

const Blog = ({ title, image, collections, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (id) {
      navigate(`/blog/${id}`);
    }
  };

  return (
    <div className="card trending-card" onClick={handleCardClick}>
      <img className="card-img-top mw-100" src={image} alt="Card cap" />
      <div className="card-body">
        <h4 className="card-title px-3 pt-2" title={title}>
          <span className="truncate">{title}</span>
        </h4>
        <h5 className="card-subtitle px-3 text-secondary fw-normal">
          {collections} - Collections
        </h5>
      </div>
    </div>
  );
};

export default Blog;

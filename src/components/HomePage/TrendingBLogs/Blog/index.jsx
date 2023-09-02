import React from "react";
import { useNavigate } from "react-router-dom";
import "./blog.m.css";

const Blog = ({ title, image, subTitle, id, description }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (id) {
      navigate(`/blog/${id}`);
    }
  };

  return (
    <div className="card trending-card" onClick={handleCardClick}>
      <img className="card-img-top mw-100 mx-auto" src={image} alt="Card cap" />
      <div className="card-body bg-light">
        <h4 className="card-title px-3 pt-2" title={title}>
          <span className="">{title}</span>
        </h4>
        <h5 className="card-subtitle px-3 text-secondary fw-bold">
          {subTitle}
        </h5>
        <p className="card-description px-3">{description}</p>
      </div>
    </div>
  );
};

export default Blog;

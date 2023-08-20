import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Blog from "./Blog";
import { imageUrl } from "../../../apis";
import { Link, useNavigate } from "react-router-dom";

const LatestBlogs = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const navigate = useNavigate();

  const fetchLatestPosts = async () => {
    const response = await fetch(
      "https://dcdc-27-57-156-44.ngrok-free.app/api/posts/"
    );
    if (response.ok) {
      const { data } = await response.json();
      console.log("data  => ", data);
      setLatestPosts(
        data.map(({ title, image, id, subTitle, updatedAt, User }) => ({
          image: image
            ? `${imageUrl}${image}`
            : "https://cdn.pixabay.com/photo/2023/03/23/05/37/bird-7871182_1280.jpg",
          title,
          id,
          subTitle,
          updatedAt,
          user: User,
        }))
      );
    } else {
      setLatestPosts([]);
    }
  };

  useEffect(() => {
    fetchLatestPosts();
  }, []);
  console.log("latestPosts  => ", latestPosts);
  return (
    <div className="container my-5 blog-container">
      <h1 className="mb-5">Latest Blogs</h1>
      <Row className="my-5 bg-light py-5 rounded">
        {latestPosts.map((blog, index) => (
          <Col key={index} md={6} className="mb-4">
            <Blog {...blog} />
          </Col>
        ))}
      </Row>
      <Button
        variant="outline-primary"
        className="px-5 py-2 rounded-pill fw-bold d-flex mx-auto"
        onClick={() => navigate("/register")}
      >
        Join The Community
      </Button>
    </div>
  );
};

export default LatestBlogs;

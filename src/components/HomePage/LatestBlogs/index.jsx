import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Blog from "./Blog";
import { BASE_URL, imageUrl } from "../../../apis";
import { Link, useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const LatestBlogs = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const navigate = useNavigate();

  const fetchLatestPosts = async () => {
    const response = await fetch(`${BASE_URL}/api/posts/`);
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

  return (
    <div className="container my-5 blog-container">
      <Fade delay={1e3} cascade damping={1e-1}>
        <h1 className="mb-5 text-danger fw-bold">Latest Blogs</h1>
      </Fade>
      <Slide>
        <Row className="my-5 bg-light py-5 rounded">
          {latestPosts.map((blog, index) => (
            <Col key={index} md={6} className="mb-4">
              <Blog {...blog} />
            </Col>
          ))}
        </Row>
      </Slide>
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

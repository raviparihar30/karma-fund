import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Blog from "./Blog";
import { BASE_URL, imageUrl } from "../../../apis";
import { Fade, Reveal } from "react-awesome-reveal";
import "./index.m.css";

const LatestBlogs = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  const fetchLatestPosts = async () => {
    const response = await fetch(`${BASE_URL}/api/posts/`);
    if (response.ok) {
      const { data } = await response.json();
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
    !!latestPosts.length && (
      <div className="blog-container">
        <div className="container">
          <Fade delay={10} cascade damping={1e-1}>
            <h1 className="mb-5 text-dark fw-bold">
              Latest <span className="text-danger">Blogs</span>
            </h1>
          </Fade>
          <Row className="my-5  py-5 rounded">
            {latestPosts.map((blog, index) => (
              <Col key={index} md={6} className="mb-4">
                <Reveal
                  className="fade-in h-100"
                  delay={index * 1 + 200}
                  triggerOnce
                >
                  <Blog {...blog} />
                </Reveal>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  );
};

export default LatestBlogs;

import "./index.m.css";
import blogs from "./blogs.json";
import { Button } from "react-bootstrap";
import Blog from "./Blog";
import { useEffect, useState } from "react";
import { imageUrl } from "../../../apis";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const fetchLatestPosts = async () => {
    const response = await fetch(
      "https://4f1c-182-70-202-68.ngrok-free.app/api/posts/"
    );
    if (response.ok) {
      const { data } = await response.json();
      setLatestPosts(
        data.map(({ title, image, id }) => ({
          image: image
            ? `${imageUrl}${image}`
            : "https://cdn.pixabay.com/photo/2023/03/23/05/37/bird-7871182_1280.jpg",
          title,
          id,
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
      <h1 className="mb-5">Latest inspiration</h1>
      <div className="d-flex flex-wrap gap-4">
        <Button
          variant="outline-primary"
          className="px-4 py-2 rounded-pill fw-bold border-primary"
        >
          View All
        </Button>
        <Button
          variant="outline-secondary"
          className="px-4 py-2 rounded-pill fw-bold border-secondary"
        >
          Illustration
        </Button>
        <Button
          variant="outline-secondary"
          className="px-4 py-2 rounded-pill fw-bold border-secondary"
        >
          Branding
        </Button>
        <Button
          variant="outline-secondary"
          className="px-4 py-2 rounded-pill fw-bold border-secondary"
        >
          Product Designes
        </Button>
        <Button
          variant="outline-secondary"
          className="px-4 py-2 rounded-pill fw-bold border-secondary"
        >
          Typography
        </Button>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-4 my-5 bg-light py-5 rounded">
        {latestPosts.map((blog, index) => (
          <Blog {...blog} key={index} />
        ))}
      </div>
      <Button
        variant="outline-primary"
        className="px-5 py-2 rounded-pill fw-bold d-flex mx-auto"
      >
        Join The Community
      </Button>
    </div>
  );
};

export default LatestBlogs;

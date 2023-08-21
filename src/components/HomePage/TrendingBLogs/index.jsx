import "./index.m.css";
import blogs from "./blogs.json";
import { Button } from "react-bootstrap";
import Blog from "./Blog";
import MainSlider from "../../Structure/Slides";
import { useEffect, useState } from "react";
import { BASE_URL, imageUrl } from "../../../apis";

const TrendingBlogs = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const fetchLatestPosts = async () => {
    const response = await fetch(`${BASE_URL}/api/posts/`);
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
    <div className="trending-blog-container-bg py-4">
      <div className="container pt-5 trending-blog-container text-center">
        <h1 className="mb-5 text-light">Trending collections</h1>
        <MainSlider>
          {[...latestPosts, ...blogs].map((blog, index) => (
            <Blog {...blog} key={index} />
          ))}
        </MainSlider>
      </div>
    </div>
  );
};
export default TrendingBlogs;

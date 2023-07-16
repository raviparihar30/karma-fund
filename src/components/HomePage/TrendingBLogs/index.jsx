import "./index.m.css";
import blogs from "./blogs.json";
import { Button } from "react-bootstrap";
import Blog from "./Blog";
import MainSlider from "../../Structure/Slides";

const TrendingBlogs = () => (
  <div className="trending-blog-container-bg py-4">
    <div className="container pt-5 trending-blog-container text-center">
      <h1 className="mb-5 text-light">Trending collections</h1>
      <MainSlider>
        {blogs.map((blog, index) => (
          <Blog {...blog} key={index} />
        ))}
      </MainSlider>
    </div>
  </div>
);

export default TrendingBlogs;

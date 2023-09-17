import "./index.m.css";
import blogs from "./blogs.json";
import Blog from "./Blog";
import MainSlider from "../../Structure/Slides";

const Teams = () => (
  <div className="trending-blog-container-bg py-4">
    <div className="container pt-5 trending-blog-container">
      <h1 className="mb-5 text-dark">
        Our <span className="text-danger">Team</span>
      </h1>
      <MainSlider>
        {[...blogs].map((blog, index) => (
          <Blog {...blog} key={index} />
        ))}
      </MainSlider>
    </div>
  </div>
);

export default Teams;

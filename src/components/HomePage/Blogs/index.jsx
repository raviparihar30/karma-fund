import "./index.m.css";
import blogs from "./blogs.json";
import Blog from "./Blog";

const Blogs = () => (
  <div className="container my-5 blog-container">
    <h1 className="mb-5">From our blog</h1>
    <div className="d-flex flex-wrap justify-content-center gap-4 my-5 py-5 rounded">
      {blogs.map((blog, index) => (
        <Blog {...blog} key={index} />
      ))}
    </div>
  </div>
);

export default Blogs;

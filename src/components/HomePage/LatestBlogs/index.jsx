import "./index.m.css";
import blogs from "./blogs.json";
import { Button } from "react-bootstrap";
import Blog from "./Blog";

const LatestBlogs = () => (
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
      {blogs.map((blog, index) => (
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

export default LatestBlogs;

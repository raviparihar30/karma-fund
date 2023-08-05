import { useNavigate } from "react-router-dom";
import "./index.m.css";

const Blog = ({ title, image, id }) => {
  const navigate = useNavigate();
  return (
    <div class="card blog-card" onClick={() => navigate(`/blog/${id}`)}>
      <img class="card-img-top mw-100 h-100" src={image} alt="Card image cap" />
    </div>
  );
};

export default Blog;

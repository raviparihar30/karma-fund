import "./index.m.css";

const Blog = ({ title, image }) => {
  return (
    <div class="card blog-card">
      <img class="card-img-top mw-100" src={image} alt="Card image cap" />
    </div>
  );
};

export default Blog;

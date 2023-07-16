import "./index.m.css";

const Blog = ({ title, image, collections }) => {
  return (
    <div class="card trending-card">
      <img class="card-img-top mw-100" src={image} alt="Card image cap" />
      <h4 className="px-3 pt-2">{title}</h4>
      <h5 className="px-3 text-secondary fw-normal">
        {collections} - Collections
      </h5>
    </div>
  );
};

export default Blog;

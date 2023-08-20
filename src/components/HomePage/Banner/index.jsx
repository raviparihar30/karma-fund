import { Button, NavLink } from "react-bootstrap";
import "./index.m.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="banner-text-container">
        <h1>
          The platform for creative <span className="text-info">minds</span>.
        </h1>
        <h5 className="text-light">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </h5>
        <div className="d-flex gap-3 my-5 align-items-start flex-column flex-md-row">
          <Button
            variant="outline-light"
            className="px-5 py-2 rounded-pill fw-bold"
            onClick={() => navigate("/register")}
          >
            Join The Community
          </Button>
          <Button
            variant="outline-light"
            className="px-4 py-2 rounded-pill fw-bold"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { Button, NavLink } from "react-bootstrap";
import "./index.m.css";

const Banner = () => {
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
        <div className="d-flex gap-3 my-5 align-items-center">
          <Button
            variant="outline-light"
            className="px-5 py-2 rounded-pill fw-bold"
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

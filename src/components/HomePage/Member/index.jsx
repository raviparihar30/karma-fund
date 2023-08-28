import { Button } from "react-bootstrap";
import "./index.m.css";
import SpiralIcon from "../../../assets/icons/spiral";
import { useNavigate } from "react-router-dom";

const Member = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark member-section">
      <div className="container member-inner-section px-5">
        <div className="d-flex flex-column text-container">
          <SpiralIcon />
          <h1 className="mt-3">
            Become a member of the best creative community
          </h1>
        </div>
        <Button
          variant="primary"
          className="px-3 py-2 rounded-pill fw-bold d-flex mx-auto"
          onClick={() => navigate("/register")}
        >
          Join The Community
        </Button>
      </div>
    </div>
  );
};

export default Member;

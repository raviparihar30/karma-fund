// TeamCarousel.js
import React from "react";
import { Carousel } from "react-bootstrap";
import "./TeamCarousel.css";
import TeamMemberCard from "./TeamMemberCard";
const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
  },
  {
    name: "Jane Smith",
    position: "COO",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
  },
  // Add more team members here
];

const TeamCarousel = () => {
  return (
    <div className="team-carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        {teamMembers.map((member, idx) => (
          <div key={idx} className="carousel-item">
            <TeamMemberCard member={member} /> {/* Use the card component */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TeamCarousel;

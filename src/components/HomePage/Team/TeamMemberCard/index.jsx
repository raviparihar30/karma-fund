const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-member-card">
      <img src={member.image} alt={member.name} className="card-image" />
      <div className="card-content">
        <h3>{member.name}</h3>
        <p>{member.position}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;

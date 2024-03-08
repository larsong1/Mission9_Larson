import jsonTeams from './CollegeBasketballTeams.json';
import Team from './Team';

function TeamList() {
  return (
    <ul className="list-group">
      {jsonTeams.teams.map((team) => (
        <Team
          schoolName={team.school}
          mascotName={team.name}
          location={team.city + ', ' + team.state}
        />
      ))}
    </ul>
  );
}

export default TeamList;

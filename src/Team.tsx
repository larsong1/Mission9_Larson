import React from 'react';

interface TeamProps {
  schoolName: string;
  mascotName: string;
  location: string;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneBand = this.props;

    return (
      <li className="list-group-item">
        <h2>{oneBand.schoolName}</h2>
        <h3>{oneBand.mascotName}</h3>
        <h3>{oneBand.location}</h3>
      </li>
    );
  }
}

export default Team;

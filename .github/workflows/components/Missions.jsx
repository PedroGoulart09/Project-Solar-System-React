import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import MissionsTeste from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <div>
          <div className="Missoes">
            <Title headline="Missões" />
            {MissionsTeste.map((mission) => (
              <li className="missions" key={ mission.name }>
                <MissionCard
                  name={ mission.name }
                  year={ mission.year }
                  country={ mission.country }
                  destination={ mission.destination }
                />
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

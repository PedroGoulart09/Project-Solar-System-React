import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    const planetsTeste = Planets.map((planets) => (
      <PlanetCard
        key={ planets.name }
        planetName={ planets.name }
        planetImage={ planets.image }
      />
    ));
    return (
      <div>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
          <div>
            {planetsTeste}
          </div>
        </div>
      </div>
    );
  }
}

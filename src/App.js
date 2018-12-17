import React, { Component } from 'react';
import FamilyPresentation from './components/FamilyPresentation';
import PlantPresentational from './components/PlantPresentational';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar/>
          <FamilyPresentation/>
          <PlantPresentational/>
        </div>
      </div>
    );
  }
}

export default App;

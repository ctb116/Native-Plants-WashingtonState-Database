import React, { Component } from 'react';
import './App.css';
import FamilyPresentation from './components/FamilyPresentation';
import PlantPresentational from './components/PlantPresentational';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div className="rainer-image">
        <div className="tint">
          <NavBar/>
          <FamilyPresentation/>
          <PlantPresentational/>
        </div>
      </div>
    );
  }
}

export default App;

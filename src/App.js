import React, { Component } from 'react';
import { Container } from 'reactstrap';
import FamilyPresentation from './components/FamilyPresentation';

class App extends Component {
  render() {
    return (
      <Container>
        <div>
          <FamilyPresentation/>
        </div>
      </Container>
    );
  }
}

export default App;

import Container from '@material-ui/core/Container';
import React from 'react';
import './App.css';
import Base from './Base';

function App() {

  return (
    <div className="App">
      <Container fixed>
        <Base></Base>
      </Container>
    </div>
  );
}

export default App;

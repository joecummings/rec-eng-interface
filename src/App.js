import React from 'react';
import TwitterForm from './components/Form';
import news from './news.svg';
import './App.css';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <div>
          <img src={news} className="App-logo" alt="logo" />
          <TwitterForm/>
        </div>
      </Container>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
  return (
    <h1 className="header"> Pomodoro </h1>
    );
  }
}

class Timer extends Component {
  render() {
    return (
      <h2 className="body"> Timer and stuff </h2>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <h3 className="footer"> Footer and stuff </h3>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Timer />
          <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
  return (
    <div>
      <h1 className="header"> Pomodoro </h1>
    </div>
    );
  }
}

class Timer extends Component {
  state = {
    play: false,
    timeLeft: 10,
  };

  alert() {
    console.log('Good job! take a break')
  }

  elapseTime() {
    if (this.state.play === true) {
        setInterval(() => {
          this.setState((prevState) => {
          return { timeLeft: prevState.timeLeft - 1};
        })
      }, 1000);
    }
  }

  componentDidMount() {
    this.elapseTime();
  }

  clickPlay = () => {
    this.setState({
      play: true,
    })
    console.log(this.state.play);
  }

  clickPause = () => {
    this.setState({
      play: false,
    })
  }

  

  render() {
    return (
      <div className="body">
        <h2 className="bodyTitle"> Timer and stuff </h2>
        <div>Time remaining: {this.state.timeLeft} </div>
        <button onClick={this.clickPlay}> Play </button> <button onClick={this.clickPause} > Pause </button>
      </div>
    );
  }
}

class Footer extends Component {
  state = {
    currentTime: new Date(),
  };
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTime: new Date() })
    }, 1000);
  }

  render() {
    return (
      <div className="footer">
        <h3> Footer and stuff </h3>
        <p>Time: {this.state.currentTime.toLocaleString()}</p>
      </div>
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

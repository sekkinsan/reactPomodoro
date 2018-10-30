import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
  return (
    <div>
      <h1 className="header"> Pomodoro </h1>
      <h3 className="header1"> GET SHIT DONE </h3>
    </div>
    );
  }
}

class Timer extends Component {
  constructor() {
  super();
  this.state = {
    play: false,
    time: 10,
  };
  }

  componentDidMount() {
    this.elapseTime();
  }

  alert() {
    console.log('Good job! take a break')
  }

  elapseTime() {
    if (this.state.time === 0) {
      this.reset(0);
      this.alert();
    }
    if (this.state.play === true) {
      let newState = this.state.time - 1;
      this.setState({time: newState});
    }
  }

  reset(resetFor = this.state.time) {
    clearInterval(this.interval);
    let time = resetFor;
    this.setState({play: false});
  }

  restartInterval(){
    clearInterval(this.interval);
    this.interval = setInterval(this.elapseTime, 1000);
  }

  clickPlay = () => {
    this.restartInterval();

    this.setState({
      play: true,
    })
    console.log(this.state);
  }

  clickPause = () => {
    this.setState({
      play: false,
    })
    console.log(this.state);
  }

  

  render() {
    return (
      <div className="body">
        <h2 className="bodyTitle"> Timer and stuff </h2>
        <div>Time remaining: {this.state.time} </div>
        <button onClick={this.clickPlay}> Play </button> <button onClick={this.clickPause} > Pause </button>
      </div>
    );
  }
}

class Footer extends Component {
  state = {
    currentDate: new Date(),
  };
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ currentDate: new Date() })
    }, 1000);
  }

  render() {
    return (
      <div className="footer">
        <h3> Footer and stuff </h3>
        <p>Time: {this.state.currentDate.toLocaleString()}</p>
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

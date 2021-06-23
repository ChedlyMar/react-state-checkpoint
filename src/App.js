import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Chedly",
        bio: "My Biography",
        profession: "Full stack js developer",
      },
      show: true,
      interval: 0,
    };
  }

  togglePerson = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
    this.setState(() => ({
      interval: 0,
    }));
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  };

  // componentDidMount = () => {
  //   this.setState(() => ({
  //     interval: 0,
  //   }));
  // };

  render() {
    return (
      <div>
        <h1>{this.state.show ? this.state.person.fullName : ""}</h1>
        <h2>{this.state.show ? this.state.person.profession : ""}</h2>
        <p>{this.state.show ? this.state.person.bio : ""}</p>
        <button onClick={() => this.togglePerson()}>toggle</button>
        <h2>{this.state.interval}</h2>
      </div>
    );
  }
}

export default App;

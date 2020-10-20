import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userPhoto: ""
    };
  }

  getUser = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        const userPic = data.results[0].picture.thumbnail;
        this.setState({ userPhoto: userPic });
      });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div>
        <div>
          <img alt="userPic" src={this.state.userPhoto} />
        </div>
        <button onClick={this.getUser}>Change user</button>
      </div>
    );
  }
}

export default App;

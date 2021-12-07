import React, { Component } from "react";
// import { robots } from "./Robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "tachyons";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      Searchfield: "",
    };
    console.log("constructor");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
    debugger;
    console.log("shiva123");
    console.log("componentDidMount");
  }
  SearchChange = (e) => {
    this.setState({ Searchfield: e.target.value });
  };
  render() {
    const { robots, Searchfield } = this.state;
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(Searchfield.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">ROBOHASH</h1>
          <SearchBox onChange={this.SearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;

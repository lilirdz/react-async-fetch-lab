import React from "react";
export default class App extends React.Component {
  state = {
    astronauts: [],
  };

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then((res) => res.json())
      .then((obj) => {
        this.setState({
          astronauts: obj.people,
        })
      }
      );
  }
  render() {
    return (
      <div>
        {this.state.astronauts.map((person) => (
          <l1>{person.name}</l1>
        ))}
      </div>
    );
  }
}

import React from "react";
import axios from "axios";

export default class GenreList extends React.Component {
  state = {
    genre: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/genre").then(res => {
      console.log(res);
      this.setState({ genre: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.genre.map(genre => (
          <li>{genre.name}</li>
        ))}
      </ul>
    );
  }
}

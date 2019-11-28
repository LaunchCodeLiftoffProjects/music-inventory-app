import React from "react";
import axios from "axios";

export default class GenreInput extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const genre = {
      name: this.state.name
    };

    axios.post("http://localhost:8080/genre/new/", genre).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Genre Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

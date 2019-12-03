import React from "react";
import axios from "axios";

export default class ArtistInput extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    window.location = "http://localhost:3000/addTrack";

    const artist = {
      name: this.state.name
    };

    axios.post("http://localhost:8080/artist/new/", artist).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Artist:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

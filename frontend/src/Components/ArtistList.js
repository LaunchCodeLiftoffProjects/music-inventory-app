import React from "react";
import axios from "axios";

export default class ArtistList extends React.Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/artist").then(res => {
      console.log(res);
      this.setState({ artists: res.data });
    });
  }

  render() {
    return (
      <select>
        {this.state.artists.map(artist => (
          <option key={artist.id}>{artist.name}</option>
        ))}
      </select>
    );
  }
}

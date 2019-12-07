import React from "react";
import axios from "axios";
import ArtistList from "../Components/ArtistList";
import GenreList from "../Components/GenreList";

export default class MusicTrackInput extends React.Component {
  state = {
    title: "",
    type: "",
    artist: ""
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleChange2 = event => {
    this.setState({ type: event.target.value });
  };

  handleChange3 = event => {
    this.setState({ artist: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const musictrack = {
      title: this.state.title,
      type: this.state.type,
      artist: this.state.artist
    };

    axios
      .post("http://localhost:8080/music-track/new/", musictrack)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={this.handleChange} />
        </label>
        <br />
        <br />
        File Type
        <br />
        <select name="type" type="option" onChange={this.handleChange2}>
          <option value="Record">Record</option>
          <option value="Cassette">Cassette</option>
          <option value="CD">CD</option>
          <option value="Digital">Digital</option>
        </select>
        <br />
        <br />
        <input type="checkbox" name="favorite" value="favorites" />
        Check box if this song is a favorite.
        <br />
        <br />
        Artist
        <br />
        <ArtistList />
        <br />
        <a size="2" href="/addArtist">
          Click here to add a Artist
        </a>
        <br />
        <br />
        Genre
        <br />
        <GenreList />
        <br />
        <a size="2" href="/addGenre">
          Click here to add a Genre
        </a>
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    );
  }
}

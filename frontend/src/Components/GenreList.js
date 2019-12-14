import React from "react";
import axios from "axios";

export default class GenreList extends React.Component {
  state = {
    genres: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/genre").then(res => {
      console.log(res);
      this.setState({ genres: res.data });
    });
  }

  render() {
    return (
      <ul value={this.props.state.genreId} onChange={this.props.onChange}>
        {this.state.genres.map(genre => (
          <li key={genre.id}>
            <input type="radio" name="genre" value={genre.id} /> {genre.name}
            <br />
          </li>
        ))}
      </ul>
    );
  }
}

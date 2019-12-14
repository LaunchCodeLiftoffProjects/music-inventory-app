import React from "react";
import axios from "axios";

export default class GenreList extends React.Component {
  state = {
    genres: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/genree").then(res => {
      console.log(res);
      this.setState({ genres: res.data });
    });
  }

  render() {
    return (
      <select value={this.props.state.genreId} onChange={this.props.onChange}>
        {this.state.genres.map(genre => (
          <option key={genre.id}>{genre.name}</option>
        ))}
      </select>
    );
  }
}

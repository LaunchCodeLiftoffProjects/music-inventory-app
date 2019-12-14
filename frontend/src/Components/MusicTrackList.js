import React from "react";
<<<<<<< HEAD

import axios from "axios";



export default class MusicTrackList extends React.Component {

  state = {

    musictracks: []

  };



  componentDidMount() {

    axios.get("http://localhost:8080/music-track").then(res => {

      console.log(res);

      this.setState({ musictracks: res.data });

    });

  }



  render() {

    return (

      <ul>

        {this.state.musictracks.map(musictrack => (

          <li key={musictrack.id}>{musictrack.title}</li>

        ))}

      </ul>

    );

  }

}
=======
import axios from "axios";

export default class MusicTrackList extends React.Component {
  state = {
    musictracks: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/music-track").then(res => {
      console.log(res);
      this.setState({ musictracks: res.data });
    });
  }

  renderTableData() {
    return this.state.musictracks.map((musictrack, index) => {
      const { id, title, artist, type, genre } = musictrack;
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>{artist.name}</td>
          <td>{type}</td>
          <td>{genre.name}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Tracks</h1>
        <table id="musictrack">
          <tr>
            <th>----Title of Song----</th>
            <th>----Artist----</th>
            <th>----Availible On----</th>
            <th>----Genre Name----</th>
          </tr>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
>>>>>>> 97948fa9afbbdfeae7bc619ffeed0d555c934a47

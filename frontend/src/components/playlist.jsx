import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

export default class playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/playlist/viewplaylist")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: "Error retreiving data" });
      });
  }

  addTracks(id) {
    this.setState({ errorMsg: "Function under construction" });
  }

  renderTableData() {
    return this.state.posts.map((post, index) => {
      const { id, title } = post;
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>
            <a size="2" href={"/viewtracksinaplaylist/" + post.id}>
              View Tracks
            </a>
          </td>
          <td>
            <a size="2" href={"/addtrackstoplaylist/" + post.id}>
              Add Tracks
            </a>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1 id="title">Playlists</h1>

        <table border="1" id="musictrack">
          <tr>
            <th>Playlist Title</th>
            <th>View Tracks</th>
            <th>Add Tracks</th>
          </tr>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

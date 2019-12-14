import axios from "axios";
import React from "react";
import {withRouter} from 'react-router';
import { makeStyles } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";



import Playlisttrackinput from "../Components/Playlisttrackinput";



export default class AddTrackPlaylist extends React.Component {

  state = {
    musictracks: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/music-track").then(res => {
      console.log(res);
      this.setState({ musictracks: res.data });
    });
  }

  handleClick = (event,id) => {
    console.log(id)
  const body = {
    "playlistid": this.props.match.params.id,
    "trackid": id}  
    axios.post( "http://localhost:8080/playlist/addTrack", body ).then(res => {
      console.log(res);
      console.log(res.data);
       })
      .catch(error =>{
          console.log(error)
          
      })
    };
  
 
  renderTableData() {
    return this.state.musictracks.map((musictrack, index) => {
      const { id, title, artist, type, genre } = musictrack;
      return (
        <tr key={id}>
          <td>{title}</td>
          {<td>{artist.name}</td> }
          <td>{type}</td>
          { <td>{genre.name}</td> }
          <td> <button value={id} onClick={e => {this.handleClick(e,id)}} type="submit">Add</button></td>
         
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
            <th>----Available On----</th>
            <th>----Genre Name----</th>
          </tr>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

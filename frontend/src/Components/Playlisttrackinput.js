import React from "react";

import axios from "axios";

import ArtistList from "../Components/ArtistList";

import MusicTrackList from "../Components/MusicTrackList";



export default class Playlisttrackinput extends React.Component {

  state = {

 
    playlistid : 0,

    trackid : 0,

    playlistTitle : "Sample Title",

    musicTracks : [],

    selectedTrackid : 0

  };


  componentDidMount() {

    axios.get("http://localhost:8080/music-track").then(res => {

      console.log(res);

      this.setState({ musicTracks: res.data });

    });

  }



  handleChange = event => {

    this.setState({ title: event.target.value });

  };



  handleChange2 = event => {

    this.setState({ type: event.target.value });

  };



  handleChange3 = event => {

    this.setState({ artistId: event.target.value });

  };



  handleChange4 = event => {

    this.setState({ genreId: event.target.value });

  };



  handleAdd = event => {

    event.preventDefault();



    const playlistTrack = {

      playlistid: this.state.playlistid,

      trackid: this.state.trackid

 
    };



    axios

      .post("http://localhost:8080/playlist/addTrack/", playlistTrack)

      .then(res => {

        console.log(res);

        console.log(res.data);

      });

  };



  render() {

    return (
    <div>

        <label>

         Edit Playlist Tracks  
         
</label>
<br />

<br />
<label>
         PlayList Title: Sample-Title
          

        </label>

        <br />

        <br />

        <label>Add-Track-to-Playlist
        </label>
        <br />

        <select   value={this.state.selectedTrackid}
          onChange={(e) => this.setState({selectedTrackid : e.target.value})}>
        {this.state.musicTracks.map((track) => <option key={track.id} value={track.id}>{track.id}  {track.title}</option>)}
 
        </select>

        <br />

        <br />

        <br />
       

        </div>

    );

  }

}
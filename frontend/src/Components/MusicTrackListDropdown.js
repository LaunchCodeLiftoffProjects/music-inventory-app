import React from "react";

import axios from "axios";



export default class MusicTrackListDropdown extends React.Component {

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
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Genreinput from "../Components/Genreinput";



import Playlisttrackinput from "../Components/Playlisttrackinput";



export default class AddTrackPlaylist extends React.Component {

  //Write HTML inside render function



  render() {

    return (
    
      <div>
        <h2>{this.props.match.params.id}</h2>
        <h3>{this.props.match.params.title}</h3>
        <Playlisttrackinput />
      </div>

    );

  }

}
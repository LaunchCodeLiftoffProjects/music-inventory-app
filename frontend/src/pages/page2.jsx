import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MusicTrackList from "../components/MusicTrackList";

export default class addArtist extends React.Component {
  //Write HTML inside render function

  render() {
    return (
      <h1>
        Tracks
        <MusicTrackList />
      </h1>
    );
  }
}

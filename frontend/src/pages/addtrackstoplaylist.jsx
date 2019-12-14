import React from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Playlisttrackinput from "../components/Playlisttrackinput";

export default class AddTrackPlaylist extends React.Component {
  //Write HTML inside render function
  constructor(props) {
    super(props);
    this.routeParam = props.match.params.id;
  }

  render() {
    const id = this.props.match.params.id;

    return <div>{id}</div>;
  }
}

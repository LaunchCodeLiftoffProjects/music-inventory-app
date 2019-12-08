import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import logo from "./logo.jpg";

export const NavBar = ({ color }) => (
  <AppBar color={color}>
    <Toolbar>
      <img src={logo} alt="logo" width="42" height="42"></img>

      <Link to="/page1">
        <Button>Playlist</Button>
      </Link>
      <Link to="/page2">
        <Button>Track</Button>
      </Link>
      <Link to="/addTrack">
        <Button>Add Track</Button>
      </Link>
      <Link to="/page3">
        <Button>Search</Button>
      </Link>

      <Link to="/page4">
        <Button>Share</Button>
      </Link>
      <Link to="/addplaylist">
        <Button>Add Playlist</Button>
      </Link>
    </Toolbar>
  </AppBar>
);

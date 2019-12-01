import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { lightGreen } from "@material-ui/core/colors";

import GenreList from "../Components/GenreList";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default class addTrack extends React.Component {
  //Write HTML inside render function
  render() {
    return (
      <div>
        <h1>Add Track Information</h1>
        <font color="black" size="5">
          Track Title:
          <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Type title of song here"
            helperText="Example: Jail House Rock"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <br />
          <input type="checkbox" name="favorite" value="favoriteSong" />
          Check box if this song is a favorite.
          <br />
          <br />
          Artist
          <br />
          <ArtistList />
          <br />
          <a size="2" href="/addArtist">
            Click here to add a Artist
          </a>
          <br />
          <br />
          <br />
          Genre
          <br />
          <GenreList />
          <br />
          <a size="2" href="/addGenre">
            Click here to add a Genre
          </a>
          <br />
          <br />
          File Type
          <br />
          <select name="FileType">
            <option value="Record">Record</option>
            <option value="Cassette">Cassette</option>
            <option value="CD">CD</option>
            <option value="Digital">Digital</option>
          </select>
          <br />
          <br />
          <Button variant="outlined" color="primary">
            Submit
          </Button>
        </font>
      </div>
    );
  }
}

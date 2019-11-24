import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { lightGreen } from "@material-ui/core/colors";

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

export default function ContainedButtons() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.container}>
      <h1>Add Track Information</h1>
      <font color="#888888" size="5">
        <TextField
          id="standard-full-width"
          label="Track Title"
          style={{ margin: 8 }}
          placeholder="Title of song"
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
        <TextField
          id="standard-full-width"
          label="Artist"
          style={{ margin: 8 }}
          placeholder="Artist"
          helperText="Example: Elvis"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Genre</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={age}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Rock</MenuItem>
            <MenuItem value={20}>Country</MenuItem>
            <MenuItem value={30}>Classical</MenuItem>
            <MenuItem value={40}>Jazz</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            File Type
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>CD</MenuItem>
            <MenuItem value={20}>Cassette</MenuItem>
            <MenuItem value={30}>Record</MenuItem>
            <MenuItem value={40}>Digital</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button variant="outlined" color="primary" className={classes.button}>
          Submit
        </Button>
      </font>
    </div>
  );
}

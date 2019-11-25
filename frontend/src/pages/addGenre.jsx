import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

  return (
    <body>
      <p>
        <b>
          <font color="white" face="Bahnschrift SemiBold" size="8">
            Add a genre:
          </font>
        </b>
      </p>
      <p>
        <font color="white" face="Bahnschrift SemiBold" size="4">
          Name:{" "}
        </font>
        <font face="Bahnschrift SemiBold" size="5">
          &nbsp;
          <input type="text" name="T1" size="23" />
        </font>
        <font face="Bahnschrift SemiBold" size="5"></font>
        <font size="6" face="Bahnschrift Light SemiCondensed">
          &nbsp;
        </font>
        <font face="Bahnschrift Light SemiCondensed" size="5">
          <input type="submit" value="Submit" name="B1" />
        </font>
      </p>
    </body>
  );
}

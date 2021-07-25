import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useData } from "../Context/AppContext";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect({ midiDevices }) {
  const { setDeviceFunc } = useData();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {midiDevices
            ? midiDevices.map((device, i) => {
                return (
                  <MenuItem key={`device key ${i}`} value={device}>
                    {`${device.id} - ${device.name}`}
                  </MenuItem>
                );
              })
            : null}
        </Select>
      </FormControl>
      {selected && (
        <Link to="/main">
          <Button onClick={() => setDeviceFunc(selected)}>Go to Main</Button>
        </Link>
      )}
    </div>
  );
}

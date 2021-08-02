import React, { useEffect, useReducer, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IconButton from "@material-ui/core/IconButton";
import { useData } from "../Context/AppContext";

export default function FormDialog({ presetEventListener, keys, forceUpdate }) {
  const [open, setOpen] = React.useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const { addPreset } = useData();

  const nameRef = useRef();
  const numberRef = useRef();
  const keyRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setErrorVisible(false);
    setOpen(false);
  };

  const addHandler = () => {
    if (nameRef.current.value === "") {
      setErrorVisible(true);
      return;
    } else if (numberRef.current.value === "") {
      setErrorVisible(true);
      return;
    } else if (keyRef.current.value === "") {
      setErrorVisible(true);
      return;
    }

    const preset = {
      name: nameRef.current.value,
      presetNumber: Number(numberRef.current.value),
      key: keyRef.current.value,
    };
    addPreset(preset);
    setErrorVisible(false);
    setOpen(false);
    forceUpdate();
  };

  function DialogFunction() {
    useEffect(() => {
      window.removeEventListener("keyup", presetEventListener, true);
      return () => {
        window.addEventListener("keyup", presetEventListener, true);
      };
    }, []);

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Preset</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Preset Name"
            type="text"
            fullWidth
            inputRef={nameRef}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Preset Axe Fx Number"
            type="number"
            fullWidth
            inputRef={numberRef}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="key"
            label="Assigned Key to activate"
            type="text"
            fullWidth
            inputRef={keyRef}
            inputProps={{ maxLength: 1 }}
            required
          />
          {errorVisible && <div>All Fields Must Be Filled</div>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addHandler} color="primary">
            add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Preset
      </Button>
      {/* <IconButton
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        <AddBoxIcon />
      </IconButton> */}
      {open && <DialogFunction />}
    </div>
  );
}

import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ControlledOpenSelect from "../Components/ControlledOpenSelect";
import { getAllDevices } from "../Utils/midiFunctions";

export default function Login({ setDevice }) {
  const [allDevices, setAllDevices] = useState();

  const setAllDevicesFunc = async () => {
    const devices = await getAllDevices();
    setAllDevices(devices);
  };

  useEffect(() => {
    setAllDevicesFunc();
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <h2>Select your axe fx:</h2>
      <ControlledOpenSelect setDevice={setDevice} midiDevices={allDevices} />
      <Link to="/main">
        <Button>Next</Button>
      </Link>
    </div>
  );
}

import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ControlledOpenSelect from "../Components/ControlledOpenSelect";
import { useData } from "../Context/AppContext";
import { getAllDevices } from "../Utils/midiFunctions";

export default function Login({ setDevice }) {
  const {device} = useData()
 
  const [allDevices, setAllDevices] = useState();

  const setAllDevicesFunc = async () => {
    const devices = await getAllDevices();
    setAllDevices(devices);
  };

  useEffect(() => {
    setAllDevicesFunc();
  }, []);
  if (device) {
    return <Redirect to='/main'/>
  }
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

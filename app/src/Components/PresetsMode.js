import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { setPreset, setScene } from "../Utils/midiFunctions";
import Preset from "./Preset";

export default function PresetsMode() {
  const [device, setDevice] = useState();
  const [presets, setPresets] = useState();
  useEffect(() => {
    setDevice(localStorage.getItem("device"));
    setPresets(JSON.parse(localStorage.getItem("presets")));
  }, []);

  return (
    <div>
      <h1>Presets</h1>
      
      {presets && presets.map((preset) => <Preset preset={preset} />)}
    </div>
  );
}

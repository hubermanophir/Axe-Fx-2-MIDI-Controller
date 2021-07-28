import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Preset from "./Preset";
import presets from "../UserData/presets";

export default function PresetsMode() {
  return (
    <div>
      <h1>Presets</h1>
      {presets && presets.map((preset) => <Preset preset={preset} />)}
    </div>
  );
}

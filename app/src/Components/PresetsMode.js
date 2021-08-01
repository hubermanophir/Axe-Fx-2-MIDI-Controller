import { Button } from "@material-ui/core";
import { useData } from "../Context/AppContext";
import { setPreset } from "../Utils/midiFunctions";
import React, { useEffect, useReducer, useState } from "react";
import Preset from "./Preset";
import presets from "../UserData/presets.json";
import FormDialog from "./FormDialog";

export default function PresetsMode() {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const keys = presets.map((preset) => preset.key);
  const { device } = useData();

  const presetEventListener = async (e) => {
    function findWithAttr(array, attr, value) {
      for (let i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return array[i];
        }
      }
      return -1;
    }

    const preset = findWithAttr(presets, "key", e.key);
    if (preset !== -1) {
      await setPreset(preset.presetNumber, 1, device.id);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", presetEventListener, true);
    return () => {
      window.removeEventListener("keyup", presetEventListener, true);
    };
  }, []);

  return (
    <div>
      <h1>Presets</h1>
      {presets && presets.map((preset) => <Preset preset={preset} />)}
      <FormDialog
        forceUpdate={forceUpdate}
        presetEventListener={presetEventListener}
        keys={keys}
      />
    </div>
  );
}

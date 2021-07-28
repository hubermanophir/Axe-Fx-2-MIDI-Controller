import React, { useEffect } from "react";
import { useData } from "../Context/AppContext";
import { setPreset } from "../Utils/midiFunctions";

export default function Preset({ preset }) {
  const { device } = useData();

  const presetEventListener = async (e) => {
    if (e.key == preset.key) {
      console.log("yes");
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
      <div>{preset.name}</div>
      <div>{preset.presetNumber}</div>
      <div>{preset.key}</div>
    </div>
  );
}

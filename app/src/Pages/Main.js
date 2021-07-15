import React, { useEffect, useState } from "react";
import PresetsMode from "../Components/PresetsMode";
import SceneMode from "../Components/SceneMode";
import Login from "./Login";

export default function Main({ device }) {
  const [presetVisible, setPresetVisible] = useState(true);
  const spaceEventListener = (e) => {
    if (e.keyCode == 32) {
      setPresetVisible((prev) => setPresetVisible(!prev));
    }
  };
  useEffect(() => {
    window.addEventListener("keyup", spaceEventListener);
  }, []);
  return <div>{presetVisible ? <PresetsMode /> : <SceneMode />}</div>;
}

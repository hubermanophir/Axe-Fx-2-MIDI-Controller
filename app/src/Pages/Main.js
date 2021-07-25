import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PresetsMode from "../Components/PresetsMode";
import SceneMode from "../Components/SceneMode";
import { useData } from "../Context/AppContext";
import { setScene } from "../Utils/midiFunctions";

export default function Main() {
  const [presetVisible, setPresetVisible] = useState(true);
  const [presets, setPresets] = useState();
  const [sceneNumber, setSceneNumber] = useState();
  const { device } = useData();

  const spaceEventListener = (e) => {
    if (e.keyCode === 32) {
      setPresetVisible((prev) => setPresetVisible(!prev));
    }
  };

  // const presetEventListener = (e) => {
  //   if (e.keyCode >= 48 && e.keyCode <= 57) {
  //   }
  // };

  const sceneEventListener = async (e) => {
    if (e.key > 0 && e.key < 9) {
      await setScene(e.key, device.id);
      console.log(e.key);
      setSceneNumber(e.key);
    }
  };

  useEffect(() => {
    setPresets(JSON.parse(localStorage.getItem("presets")));
    window.addEventListener("keyup", spaceEventListener);
    return () => {
      window.removeEventListener("keyup", spaceEventListener);
    };
  }, []);

  if (!device) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      {presetVisible ? (
        <PresetsMode presets={presets} />
      ) : (
        <SceneMode
          sceneEventListener={sceneEventListener}
          sceneNumber={sceneNumber}
        />
      )}
    </div>
  );
}

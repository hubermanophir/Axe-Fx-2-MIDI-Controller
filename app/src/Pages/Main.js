import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PresetsMode from "../Components/PresetsMode";
import SceneMode from "../Components/SceneMode";
import { useData } from "../Context/AppContext";

export default function Main() {
  const [presetVisible, setPresetVisible] = useState(true);
  const { device } = useData();

  const spaceEventListener = (e) => {
    if (e.keyCode === 13) {
      setPresetVisible((prev) => setPresetVisible(!prev));
    }
  };

  useEffect(() => {
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
        <PresetsMode/>
      ) : (
        <SceneMode />
      )}
    </div>
  );
}

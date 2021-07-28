import React, { useEffect, useState } from "react";
import { useData } from "../Context/AppContext";
import { setScene } from "../Utils/midiFunctions";

export default function SceneMode() {
  const { device } = useData();
  const [sceneNumber, setSceneNumber] = useState();

  const sceneEventListener = async (e) => {
    if (e.key > 0 && e.key < 9) {
      await setScene(e.key, device.id);
      setSceneNumber(e.key);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", sceneEventListener, true);
    return () => {
      window.removeEventListener("keyup", sceneEventListener, true);
    };
  }, []);

  return (
    <div>
      <h1>Scenes</h1>
      {sceneNumber && <div id="scene-number">{sceneNumber}</div>}
    </div>
  );
}

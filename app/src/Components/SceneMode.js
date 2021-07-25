import React, { useEffect } from "react";

export default function SceneMode({ sceneEventListener, sceneNumber }) {
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

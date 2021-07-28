import React, { useEffect } from "react";
import { useData } from "../Context/AppContext";


export default function Preset({ preset }) {
  return (
    <div>
      <div>{preset.name}</div>
      <div>{preset.presetNumber}</div>
      <div>{preset.key}</div>
    </div>
  );
}

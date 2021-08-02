import React, { createContext, useContext, useEffect, useState } from "react";
import { setPreset } from "../Utils/midiFunctions";

const deviceDataContext = createContext({});

export function useData() {
  return useContext(deviceDataContext);
}

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState();
  const [presets, setPresets] = useState();

  useEffect(() => {
    setDevice(JSON.parse(localStorage.getItem("device")));
    if (JSON.parse(localStorage.getItem("presets")) == null) {
      localStorage.setItem("presets", JSON.stringify([]));
      setPresets([]);
    } else {
      setPresets(JSON.parse(localStorage.getItem("presets")));
    }
    setLoading(false);
  }, []);

  const getDeviceFunc = () => {
    return device;
  };

  const setDeviceFunc = (value) => {
    setDevice(value);
    localStorage.setItem("device", JSON.stringify(value));
  };

  const addPreset = (value) => {
    const temp = [...presets];
    temp.push(value);
    localStorage.setItem("presets", JSON.stringify(temp));
    setPresets(temp);
  };

  const value = {
    getDeviceFunc,
    setDeviceFunc,
    addPreset,
    device,
    presets,
  };
  return (
    <deviceDataContext.Provider value={value}>
      {!loading && children}
    </deviceDataContext.Provider>
  );
};

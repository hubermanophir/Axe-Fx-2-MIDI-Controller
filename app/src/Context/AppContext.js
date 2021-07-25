import React, { createContext, useContext, useEffect, useState } from "react";

const deviceDataContext = createContext({});

export function useData() {
  return useContext(deviceDataContext);
}

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState();

  useEffect(() => {
    setDevice(JSON.parse(localStorage.getItem("device")));
    setLoading(false);
  }, []);

  const getDeviceFunc = () => {
    return device;
  };

  const setDeviceFunc = (value) => {
    setDevice(value);
    localStorage.setItem("device", JSON.stringify(value));
  };

  const value = {
    getDeviceFunc,
    setDeviceFunc,
    device,
  };
  return (
    <deviceDataContext.Provider value={value}>
      {!loading && children}
    </deviceDataContext.Provider>
  );
};

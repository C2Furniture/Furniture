import React from "react";
import { Children, createContext, useState } from "react";

export const DataCardContext = createContext();
const DataCardProvider = ({ children }) => {
  const [dataCard, setDataCard] = useState();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  function refresh() {
    setUser(JSON.parse(localStorage.getItem("user")));
  }

  const updateValue = (newValue) => {
    setDataCard(newValue);
  };

  return (
    <>
      <DataCardContext.Provider
        value={{ dataCard, updateValue, user, refresh }}
      >
        {children}
      </DataCardContext.Provider>
    </>
  );
};
export default DataCardProvider;

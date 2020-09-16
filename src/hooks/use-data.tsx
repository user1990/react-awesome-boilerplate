import React, { createContext, useState, useContext } from 'react';

type ContextProps = {
  setValues: (values: any) => void;
  data: any;
};

const DataContext = createContext({} as ContextProps);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values: any) => {
    setData(prevData => ({
      ...prevData,
      ...values,
    }));
  };

  return <DataContext.Provider value={{ data, setValues }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);

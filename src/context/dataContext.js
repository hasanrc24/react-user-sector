import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    username: "",
    value: [],
    agreement: false,
  });

  return (
    <DataContext.Provider value={{ formData, setFormData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataContext, ContextProvider, useData };

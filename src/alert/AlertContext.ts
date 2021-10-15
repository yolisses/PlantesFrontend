import {createContext, useContext, useEffect, useState} from 'react';
import React from 'react';

const AlertContext = createContext();

export function AlertContextProvider({children}) {
  const [alertActive, setAlertActive] = useState(false);
  const [currentAlert, setCurrentAlert] = useState(false);

  const showAlert = alert => {
    setCurrentAlert(alert);
  };

  const closeAlert = () => {
    setAlertActive(false);
  };

  useEffect(() => {
    setAlertActive(true);
  }, [currentAlert]);

  return (
    <AlertContext.Provider
      value={{
        alertActive,
        setAlertActive,
        showAlert,
        currentAlert,
        closeAlert,
      }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertContext);
}

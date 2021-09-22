import React, {useContext} from 'react';
import {createContext, useState} from 'react';
import GetLocation from 'react-native-get-location';

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [token, setToken] = useState();

  function updateLocation() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });
  }

  return (
    <UserContext.Provider value={{setToken, updateLocation}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

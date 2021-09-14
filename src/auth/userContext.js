import React, {useContext, useEffect} from 'react';
import {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import GetLocation from 'react-native-get-location';

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user, setUser] = useState();

  async function onAuthStateChanged(newUser) {
    setUser(newUser);
  }

  function updateLocation() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });
  }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // });

  return (
    <UserContext.Provider value={{user, updateLocation}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

import React, {useContext, useEffect} from 'react';
import {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import GetLocation from 'react-native-get-location';
import firestore from '@react-native-firebase/firestore';

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
    })
      .then(location => {
        firestore()
          .collection('users')
          .doc(user.uid)
          .set({
            location: new firestore.GeoPoint(
              location.latitude,
              location.longitude,
            ),
          })
          .catch(err => console.error('err', err));
      })
      .catch(error => {
        // const {code, message} = error;
        // console.error(code, message);
      });
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  return (
    <UserContext.Provider value={{user, updateLocation}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

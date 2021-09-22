import {useLazyQuery, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {createContext, useState} from 'react';
import GetLocation from 'react-native-get-location';
import {gql} from '@apollo/client';
import {Text} from 'react-native';

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [googleToken, setGoogleToken] = useState();
  const USER = gql`
  query {
    authenticateWithGoogle(token:"${googleToken}") {
      id, name
    }
  }
`;
  const [getToken, {loading, error, data: user}] = useLazyQuery(USER);

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

  useEffect(() => {
    const coisa = getToken();
    console.error(coisa);
  }, [googleToken]);

  return (
    <UserContext.Provider value={{user, setGoogleToken, updateLocation}}>
      <Text>loading{JSON.stringify(loading)}</Text>
      <Text>data{JSON.stringify(user)}</Text>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

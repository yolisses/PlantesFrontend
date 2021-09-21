import {useLazyQuery, useQuery} from '@apollo/client';
import React, {useContext} from 'react';
import {createContext, useState} from 'react';
import GetLocation from 'react-native-get-location';
import {gql} from '@apollo/client';
import {Text} from 'react-native';

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [token, setToken] = useState();
  const USER = gql`
  query {
    authenticateWithGoogle(token:"${token}") {
      id, name
    }
  }
`;
  const {loading, error, data: user} = useLazyQuery(USER);

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
    <UserContext.Provider value={{user, setToken, updateLocation}}>
      <Text>loading{JSON.stringify(loading)}</Text>
      <Text>error{JSON.stringify(error)}</Text>
      <Text>data{JSON.stringify(user)}</Text>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

import React, {useContext} from 'react';
import {createContext, useState} from 'react';
import {useEffect} from 'react';

import {api} from 'api';

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [token, setToken] = useState();
  const [idToken, setIdToken] = useState(); //from Google

  async function authenticate(idToken) {
    try {
      const res = await api.post('/googlesignin', {idToken});
      setToken(res.data.token);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <UserContext.Provider value={{authenticate, token}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

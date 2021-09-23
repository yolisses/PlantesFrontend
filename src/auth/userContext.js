import React, {useContext} from 'react';
import {createContext, useState} from 'react';
import {api} from 'api';

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [token, setToken] = useState();

  async function authenticate(idToken) {
    try {
      const res = await api.post('/googlesignin', {idToken});
      const {token} = res.data;
      setToken(token);
      api.defaults.headers.common.auth = `Bearer ${token}`;
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

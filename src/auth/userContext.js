import React, {useContext} from 'react';
import {createContext, useState} from 'react';
import {api} from 'api';

const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  async function authenticate(idToken) {
    try {
      const res = await api.post('/googlesignin', {idToken});
      const {token, user} = res.data;
      setToken(token);
      setUser(user);
      api.defaults.headers.common.auth = `Bearer ${token}`;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <UserContext.Provider value={{authenticate, token, user}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

import {api} from 'api';
import {auth} from 'auth/auth';
import React, {createContext, useContext, useEffect, useState} from 'react';

const ChatsContext = createContext();
export function ChatsContextProvider({children}) {
  const [chats, setChats] = useState({});

  useEffect(() => {
    api
      .get('/chats')
      .then(res => {
        setChats(res.data);
      })
      .catch(err => console.error(err.response));
  }, [auth.token]);

  return (
    <ChatsContext.Provider value={{chats}}>{children}</ChatsContext.Provider>
  );
}

export function useChats() {
  return useContext(ChatsContext);
}

import {api} from 'api';
import {useUserContext} from 'auth/userContext';
import React, {createContext, useContext, useEffect, useState} from 'react';

const ChatsContext = createContext();
export function ChatsContextProvider({children}) {
  const [chats, setChats] = useState({});

  const {token} = useUserContext();

  useEffect(() => {
    api
      .get('/chats')
      .then(res => {
        setChats(res.data);
      })
      .catch(err => console.error(err.response));
  }, [token]);

  return (
    <ChatsContext.Provider value={{chats}}>{children}</ChatsContext.Provider>
  );
}

export function useChats() {
  return useContext(ChatsContext);
}

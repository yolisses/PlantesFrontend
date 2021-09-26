import {api} from 'api';
import React, {createContext, useContext, useEffect, useState} from 'react';

const ChatsContext = createContext();
export function ChatsContextProvider({children}) {
  const [chats, setChats] = useState({});
  useEffect(() => {
    api
      .get('/chats')
      .then(res => {
        setChats(res.data);
        console.error(res.data);
      })
      .catch(err => console.error(err.response));
  }, []);

  return (
    <ChatsContext.Provider value={{chats}}>{children}</ChatsContext.Provider>
  );
}

export function useChats() {
  return useContext(ChatsContext);
}

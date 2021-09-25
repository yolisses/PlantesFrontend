import {useUserContext} from 'auth/userContext';
import React, {createContext, useContext, useState} from 'react';
import {v4} from 'uuid';

const MessagesContext = createContext();

const messages = {};
const sendingMessages = {};
export function MessagesContextProvider({children}) {
  const [refreshValue, setRefreshValue] = useState();

  const {user} = useUserContext();

  function refresh() {
    setRefreshValue(Math.random());
  }

  function pushMessage(message) {
    const fakeId = v4();
    message._id = fakeId;
    message.status = 'sending';
    message.userId = user._id;
    sendingMessages[fakeId] = message;
    refresh();
  }

  return (
    <MessagesContext.Provider
      value={{messages, sendingMessages, refreshValue, pushMessage}}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  return useContext(MessagesContext);
}

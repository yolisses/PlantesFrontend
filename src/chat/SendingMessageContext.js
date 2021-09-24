import React, {createContext, useContext, useState} from 'react';
import {v4} from 'uuid';

const SendingMessageContext = createContext();

const sendingMessages = {};
export function SendingMessageContextProvider({children}) {
  const [refreshValue, setRefreshValue] = useState();

  function pushMessage(message) {
    const fakeId = v4();
    message._id = fakeId;
    message.status = 'sending';
    sendingMessages[fakeId] = message;
    refresh();
  }

  function refresh() {
    setRefreshValue(Math.random());
  }
  return (
    <SendingMessageContext.Provider
      value={{refreshValue, pushMessage, sendingMessages}}>
      {children}
    </SendingMessageContext.Provider>
  );
}

export function useSendingMessage() {
  return useContext(SendingMessageContext);
}

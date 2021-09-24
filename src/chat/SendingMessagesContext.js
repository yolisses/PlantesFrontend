import React, {createContext, useContext, useState} from 'react';

const SendingMessagesContext = createContext();

export function SendingMessagesContextProvider({children}) {
  const sendingMessages = {};
  const [refreshValue, setRefreshValue] = useState();

  function pushMessage({text, chatId, toUserId}) {}

  return (
    <SendingMessagesContext.Provider value={{sendingMessages, refreshValue}}>
      {children}
    </SendingMessagesContext.Provider>
  );
}

export function useSendingMessages() {
  return useContext(SendingMessagesContext);
}

import {api} from 'api';
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
    try {
      api
        .post('sendmessage', message)
        .then(res => {
          removeMessage(message._id);
          refresh();
        })
        .catch(err => console.error(err));
    } catch (err) {}
  }

  function removeMessage(messageId) {
    delete sendingMessages[messageId];
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

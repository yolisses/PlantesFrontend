import {api} from 'api';
import {useUserContext} from 'auth/userContext';
import React, {createContext, useContext, useState} from 'react';
import {v4} from 'uuid';

const MessagesContext = createContext();

let adtionalMessages = {};
const sendingMessages = {};
export function MessagesContextProvider({children}) {
  const [refreshValue, setRefreshValue] = useState();

  const {user} = useUserContext();

  function refresh() {
    setRefreshValue(Math.random());
  }

  async function pushMessage(message) {
    const fakeId = Math.random();
    message._id = fakeId;
    message.status = 'sending';
    message.userId = user._id;
    message.chatId = '614e5e91bc8e4ff26a3346e2';
    sendingMessages[fakeId] = message;
    refresh();
    api
      .post('/sendmessage', message)
      .then(res => {
        const message = res.data;
        adtionalMessages[fakeId] = message;
        delete sendingMessages[fakeId];
        refresh();
      })
      .catch(err => console.error(err));
  }

  function cleanAdtionalMessages() {
    for (let key in adtionalMessages) {
      delete adtionalMessages[key];
    }
    refresh();
  }

  return (
    <MessagesContext.Provider
      value={{
        adtionalMessages,
        cleanAdtionalMessages,
        sendingMessages,
        refreshValue,
        pushMessage,
      }}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  return useContext(MessagesContext);
}

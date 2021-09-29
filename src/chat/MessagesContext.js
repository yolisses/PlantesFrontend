import {api} from 'api';
import {auth} from 'auth/auth';
import React, {createContext, useContext, useState} from 'react';

const MessagesContext = createContext();

let adtionalMessages = {};
const sendingMessages = {};
export function MessagesContextProvider({children}) {
  const [refreshValue, setRefreshValue] = useState();

  function refresh() {
    setRefreshValue(Math.random());
  }

  async function pushMessage({chatId, text, toUserId}) {
    const fakeId = Math.random();
    const message = {
      text,
      chatId,
      toUserId,
      _id: fakeId,
      status: 'sending',
      userId: auth.userId,
    };
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
      .catch(err => console.error(JSON.stringify(err.response)));
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

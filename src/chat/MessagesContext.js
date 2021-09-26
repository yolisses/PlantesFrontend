import {api} from 'api';
import {useUserContext} from 'auth/userContext';
import React, {createContext, useContext, useState} from 'react';

const MessagesContext = createContext();

let adtionalMessages = {};
const sendingMessages = {};
export function MessagesContextProvider({children}) {
  const [refreshValue, setRefreshValue] = useState();

  const {userId} = useUserContext();

  function refresh() {
    setRefreshValue(Math.random());
  }

  async function pushMessage({chatId, text, toUserId}) {
    const fakeId = Math.random();
    const message = {
      text,
      chatId,
      userId,
      toUserId,
      _id: fakeId,
      status: 'sending',
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

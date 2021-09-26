import React, {createContext, useContext, useState} from 'react';
import {v4} from 'uuid';
import {sendPlant} from './sendPlant';
const SendingContext = createContext();

const sendings = {};
export function SendingContextProvider({children}) {
  const [refresh, setRefresh] = useState(0);

  function removeFinisheds() {
    Object.keys(sendings).map(key => {
      if (sendings[key]?.sent) {
        delete sendings[key];
      }
    });
    setRefresh(Math.random());
  }

  function onFinish(id) {
    setRefresh(() => Math.random());
  }

  function pushSending(plant) {
    const id = v4();
    const sending = {};
    sending.localData = plant;
    sendings[id] = sending;
    sendPlant(sending, () => {
      onFinish(id);
    });
  }

  return (
    <SendingContext.Provider
      value={{pushSending, sendings, refresh, removeFinisheds}}>
      {children}
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

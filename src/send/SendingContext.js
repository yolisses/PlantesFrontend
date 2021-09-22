import React, {createContext, useContext, useState} from 'react';
import {v4} from 'uuid';
import sendPlant from './sendPlant.js';

const SendingContext = createContext();

export function SendingContextProvider({children}) {
  const sendings = {};
  const [refresh, setRefresh] = useState(0);

  function removeSending(id) {
    delete sendings[id];
    setRefresh(Math.random());
  }

  function pushSending(sending) {
    const id = v4();
    sendings[id] = sending;
    sendPlant(sending);
  }

  return (
    <SendingContext.Provider value={{pushSending, sendings, refresh}}>
      {children}
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

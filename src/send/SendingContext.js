import React, {createContext, useContext, useState} from 'react';
import {v4} from 'uuid';
import {sendPlant} from './sendPlant';

import {examplePlant} from './examplePlant';

import {Button} from 'react-native';

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

  function onPress() {
    sendPlant(examplePlant);
  }

  return (
    <SendingContext.Provider value={{pushSending, sendings, refresh}}>
      {children}
      <Button onPress={onPress} title="try" />
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

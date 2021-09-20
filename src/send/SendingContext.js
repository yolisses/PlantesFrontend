import React, {createContext, useContext, useEffect} from 'react';
import {Button} from 'react-native';
import {v4} from 'uuid';
import {dispatchAllSendings} from './dispatchAllSendings';
import {dispatchSending} from './dispatchSending';
import {getNewLink} from './getNewLink';

const SendingContext = createContext();

export function SendingContextProvider({children}) {
  const sendings = {};
  function pushSending(sending) {
    sendings[v4()] = sending;
    dispatchSending(sending);
  }

  useEffect(() => {
    dispatchAllSendings(sendings);
  });

  async function onPress() {
    const link = await getNewLink();
    console.error(link);
  }

  return (
    <SendingContext.Provider value={{pushSending, sendings}}>
      {children}
      <Button title="teste" onPress={onPress} />
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

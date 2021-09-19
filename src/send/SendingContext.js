import React, {createContext, useContext, useEffect} from 'react';
import {Button} from 'react-native';
import {v4} from 'uuid';
import {dispatchAllSendings} from './dispatchAllSendings';
import {getNewLink} from './getNewLink';

const SendingContext = createContext();

export function SendingContextProvider({children}) {
  const sendings = {};
  function pushSending(sending) {
    sending[v4()] = sending;
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
  toda;
  return useContext(SendingContext);
}

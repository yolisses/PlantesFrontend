import React, {createContext, useContext, useEffect, useState} from 'react';
import {v4} from 'uuid';
import {dispatchAllSendings} from './dispatchAllSendings';
import {dispatchSending} from './dispatchSending';
import {getNewLink} from './getNewLink';

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
    dispatchSending(sending, () => removeSending(id));
  }

  // useEffect(() => {
  //   dispatchAllSendings(sendings, removeSending());
  // });

  async function onPress() {
    const link = await getNewLink();
    console.error(link);
  }

  return (
    <SendingContext.Provider value={{pushSending, sendings, refresh}}>
      {children}
      {/* <Button title="teste" onPress={onPress} /> */}
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

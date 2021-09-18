import {useImages} from 'publish/ImagesContext';
import {useShallowData} from 'publish/ShallowDataContext';
import React, {createContext, useContext, useState} from 'react';

const SendingContext = createContext();

export function SendingContextProvider({children}) {
  const [sending, setSending] = useState();
  const {discard: discardImagesSelection} = useImages();
  const {data, discard: discardShallowData} = useShallowData();

  function send() {
    console.error('send');
    const copy = {...data};
    discardImagesSelection();
    discardShallowData();
    setSending(copy);
  }

  return (
    <SendingContext.Provider value={{send, sending, setSending}}>
      {children}
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

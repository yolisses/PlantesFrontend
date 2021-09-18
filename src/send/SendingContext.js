import React, {createContext, useState} from 'react';

const SendingContext = createContext();

export function SendingContextProvider({children}) {
  const [sending, setSending] = useState();

  return (
    <SendingContext.Provider value={{sending, setSending}}>
      {children}
    </SendingContext.Provider>
  );
}

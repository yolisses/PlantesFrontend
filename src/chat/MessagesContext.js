import React, {createContext, useContext} from 'react';

const MessagesContext = createContext();

const messages = {};
export function MessagesContextProvider({children}) {
  return (
    <MessagesContext.Provider value={{messages}}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  return useContext(MessagesContext);
}

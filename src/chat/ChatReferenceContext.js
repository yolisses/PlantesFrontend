import React, {createContext, useState} from 'react';
import {useContext} from 'react';

const ChatReferenceContext = createContext();

export function ChatReferenceContextProvider({children}) {
  const [chatReferences, setChatReferences] = useState({});

  return (
    <ChatReferenceContext.Provider value={{chatReferences, setChatReferences}}>
      {children}
    </ChatReferenceContext.Provider>
  );
}

export function useChatReference() {
  return useContext(ChatReferenceContext);
}

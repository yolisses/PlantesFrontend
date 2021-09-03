import React, {createContext, useState} from 'react';
import {useContext} from 'react';

const ChatReferenceContext = createContext();

export function ChatReferenceContextProvider({children}) {
  const [chatReferences, setChatReferences] = useState({});

  const setOneChatReference = (key, value) => {
    const copy = {...chatReferences};
    copy[key] = value;
    setChatReferences(copy);
  };

  const removeOneChatReference = key => {
    const copy = {...chatReferences};
    delete copy[key];
    setChatReferences(copy);
  };

  return (
    <ChatReferenceContext.Provider
      value={{
        chatReferences,
        setChatReferences,
        setOneChatReference,
        removeOneChatReference,
      }}>
      {children}
    </ChatReferenceContext.Provider>
  );
}

export function useChatReference() {
  return useContext(ChatReferenceContext);
}

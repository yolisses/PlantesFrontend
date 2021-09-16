import React, {createContext, useContext, useReducer} from 'react';
import {initialState, PublishReducer} from './PublishReducer';

const PublishContext = createContext();

export function PublishContextProvider({children}) {
  const [state, dispatch] = useReducer(PublishReducer, initialState);
  return (
    <PublishContext.Provider value={{state, dispatch}}>
      {children}
    </PublishContext.Provider>
  );
}

export function usePublish() {
  return useContext(PublishContext);
}

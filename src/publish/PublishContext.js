import React, {createContext, useContext, useReducer} from 'react';
import {PublishReducer} from './PublishReducer';

const PublishContext = createContext();

export function PublishContextProvider({children}) {
  const [state, dispatch] = useReducer(PublishReducer, {});
  return (
    <PublishContext.Provider value={{state, dispatch}}>
      {children}
    </PublishContext.Provider>
  );
}

export function usePublish() {
  return useContext(PublishContext);
}

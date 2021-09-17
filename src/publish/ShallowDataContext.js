import React, {createContext, useContext} from 'react';

const ShallowDataContext = createContext();

export function ShallowDataContextProvider({children}) {
  const data = {};

  function discard() {
    for (let key in data) {
      delete data[key];
    }
  }

  return (
    <ShallowDataContext.Provider value={{data, discard}}>
      {children}
    </ShallowDataContext.Provider>
  );
}

export function useShallowData() {
  return useContext(ShallowDataContext);
}

import React, {createContext, useContext} from 'react';

const ShallowDataContext = createContext();

export function ShallowDataContextProvider({children}) {
  const data = {};

  return (
    <ShallowDataContext.Provider value={{data}}>
      {children}
    </ShallowDataContext.Provider>
  );
}

export function useShallowData() {
  return useContext(ShallowDataContext);
}

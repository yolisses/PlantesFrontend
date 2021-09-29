import React, {createContext, useContext, useState} from 'react';

const SearchContext = createContext();

export function SearchContextProvider({children}) {
  const [sell, setSell] = useState();
  const [swap, setSwap] = useState();
  const [donate, setDonate] = useState();
  return (
    <SearchContext.Provider value={{sell, swap, donate}}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}

import {api} from 'api/api';
import React, {createContext, useContext, useState} from 'react';

const UsersByIdContext = createContext();

const usersById = {};

export function UsersByIdContextProvider({children}) {
  const [refreshValue, setRefreshValue] = useState();

  function getUserById(id) {
    if (!id) {
      return null;
    }
    if (usersById[id]) {
      return usersById[id];
    }
    api
      .get('/user/' + id)
      .then(res => {
        usersById[id] = res.data;
        setRefreshValue(Math.random);
      })
      .catch(err => console.error(err.response));
  }

  function setCurrentUser(user) {
    usersById[user._id] = user;
    setRefreshValue(Math.random());
  }

  return (
    <UsersByIdContext.Provider
      value={{getUserById, refreshValue, setCurrentUser}}>
      {children}
    </UsersByIdContext.Provider>
  );
}

export function useUserById() {
  return useContext(UsersByIdContext);
}

import {api} from 'api';
import React, {createContext, useContext, useState} from 'react';

const ChatRoomContext = createContext();

/*chatroom = {
 id:"fasdfasredr43d343"
 idType:"userid"|"chatID"
 user:"fad44542frgrgwr4fw"
 reference:{
     id:"r543523523fdgsd0"
     type:"plant"
 }
}*/

const localRooms = {};
export function ChatRoomContextProvider({children}) {
  const [refreshValue, setRefreshValue] = useState();

  function refresh() {
    setRefreshValue(Math.random());
  }

  function createLocalRoom({id, type}) {
    localRooms[id] = {id, type};
    api
      .get('/user/' + id)
      .then(res => {
        localRooms[id].user = res.data;
        refresh();
      })
      .catch(err => console.error(err));
  }

  function setReference({id, reference}) {
    localRooms[id].reference = reference;
    refresh();
  }

  function removeReference(id) {
    delete localRooms[id].reference;
    refresh();
  }

  return (
    <ChatRoomContext.Provider
      value={{
        chatRooms: localRooms,
        refreshValue,
        setReference,
        createLocalRoom,
        removeReference,
      }}>
      {children}
    </ChatRoomContext.Provider>
  );
}

export function useChatRoom() {
  return useContext(ChatRoomContext);
}

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

const chatRooms = {};
export function ChatRoomContextProvider({children}) {
  const [refreshValue, setRefreshValue] = useState();

  function refresh() {
    setRefreshValue(Math.random());
  }

  function createChatRoom({id, type}) {
    chatRooms[id] = {id, type};
    api
      .get('/user/' + id)
      .then(res => {
        chatRooms[id].user = res.data;
        refresh();
      })
      .catch(err => console.error(err));
  }

  function setReference({id, reference}) {
    chatRooms[id].reference = reference;
    refresh();
  }

  function removeReference(id) {
    delete chatRooms[id].reference;
    refresh();
  }

  return (
    <ChatRoomContext.Provider
      value={{
        chatRooms,
        refreshValue,
        setReference,
        createChatRoom,
        removeReference,
      }}>
      {children}
    </ChatRoomContext.Provider>
  );
}

export function useChatRoom() {
  return useContext(ChatRoomContext);
}

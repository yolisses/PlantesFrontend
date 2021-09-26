import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {api} from 'api';

export function ChatsListScreen() {
  const [chats, setChats] = useState({});

  const renderItem = ({item: chat}) => <ChatListItem key={chat} chat={chat} />;

  const messageCountHigher = (a, b) => a.message_count < b.message_count;

  useEffect(() => {
    api
      .get('/chats')
      .then(res => {
        setChats(res.data);
        console.error(res.data);
      })
      .catch(err => console.error(err.response));
  }, []);

  return (
    <FooterNavigationLayout selected="ChatsList">
      {chats ? (
        <FlatList
          data={Object.entries(chats)
            .sort(messageCountHigher)
            .map(entry => entry[1])}
          renderItem={renderItem}
        />
      ) : null}
    </FooterNavigationLayout>
  );
}

import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {useObserver} from 'mobx-react-lite';

import {api} from 'api';
import {chats} from './chats';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

export function ChatsListScreen() {
  useEffect(() => {
    api
      .get('/chats')
      .then(res => {
        for (let chat of res.data) {
          chats[chat._id] = chat;
        }
      })
      .catch(err => console.error(err.response));
  }, []);

  const renderItem = ({item}) => <ChatListItem key={item._id} chat={item} />;

  const messageCountHigher = (a, b) => a.message_count < b.message_count;

  return useObserver(() => (
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
  ));
}

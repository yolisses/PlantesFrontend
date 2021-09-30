import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {chatsData} from './chats';
import {api} from 'api';
import {useObserver} from 'mobx-react-lite';

export function ChatsListScreen() {
  const renderItem = ({item}) => <ChatListItem key={item._id} chat={item} />;

  const messageCountHigher = (a, b) => a?.message_count < b?.message_count;

  useEffect(() => {
    api
      .get('/chats')
      .then(res => {
        console.error(res.data);
        chatsData.chats = res.data;
      })
      .catch(err => console.error(err));
  }, []);

  return useObserver(() => (
    <FooterNavigationLayout selected="ChatsList">
      <FlatList data={chatsData.chats} renderItem={renderItem} />
    </FooterNavigationLayout>
  ));
}

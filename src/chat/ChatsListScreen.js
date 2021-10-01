import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {chatsData} from './chats';
import {api} from 'api';
import {useObserver} from 'mobx-react-lite';

export function ChatsListScreen() {
  const renderItem = ({item}) => <ChatListItem key={item._id} chat={item} />;

  // useEffect(() => {
  //   api
  //     .get('/chats')
  //     .then(res => {
  //       chatsData.chats = res.data;
  //     })
  //     .catch(err => console.error(err));
  // }, []);

  return useObserver(() => (
    <FooterNavigationLayout selected="ChatsList">
      <FlatList data={Object.values(chatsData.chats)} renderItem={renderItem} />
    </FooterNavigationLayout>
  ));
}

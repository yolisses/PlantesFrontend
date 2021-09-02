import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {api} from 'api';

export function ChatsListScreen() {
  const [chats, setChats] = useState(null);

  async function getChats() {
    try {
      const res = await api.get('/chats');
      setChats(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getChats();
  }, []);

  const renderItem = ({item}) => <ChatListItem key={item} item={item} />;

  const messageCountHigher = (a, b) => a.message_count < b.message_count;

  return (
    <FooterNavigationLayout selected="ChatsList">
      {chats ? (
        <FlatList
          data={chats.sort(messageCountHigher)}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
        />
      ) : null}
    </FooterNavigationLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 2,
    paddingRight: 6,
  },
});

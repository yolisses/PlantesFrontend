import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

export function ChatsListScreen() {
  return (
    <FooterNavigationLayout selected="ChatsList">
      <ScrollView style={styles.container}>
        {Object.keys([...Array(10)]).map(item => (
          <ChatListItem key={item} />
        ))}
      </ScrollView>
    </FooterNavigationLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 6,
    paddingRight: 12,
  },
});

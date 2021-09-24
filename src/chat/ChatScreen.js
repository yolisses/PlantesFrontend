import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Message} from 'chat/Message';
import {MessageInput} from 'chat/MessageInput';
import {CustomHeader} from 'publish/CustomHeader';
import {BackButton} from 'publish/BackButton';
import {UserImageAndName} from 'user/UserImageAndName';
import {FlatList} from 'react-native-gesture-handler';
import {useChatRoom} from './ChatroomsContext';

export function ChatScreen({route}) {
  const {chatRoomId} = route.params;

  const {chatRooms} = useChatRoom();

  const item = chatRooms[chatRoomId];
  const user = item?.user;

  function renderItem({item: message}) {
    return (
      <Message
        key={message.id}
        item={message}
        // fromUser={message.userId === user._id}
        // moreMargin={actualLastUserId !== message.userId}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <CustomHeader
        left={<BackButton />}
        center={<UserImageAndName image={user?.image} name={user?.name} />}
      />
      <Text>{JSON.stringify(item)}</Text>
      <FlatList renderItem={renderItem} />
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  pad: {
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

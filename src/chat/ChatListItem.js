import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChatDate} from './ChatDate';
import {ChatNumberIndicator} from 'chat/ChatNumberIndicator';
import {UserRoundImage} from 'common/UserRoundImage';
import {useUser} from 'user/useUser';
import {useUserContext} from 'auth/userContext';

export function ChatListItem({item}) {
  const {last_activity, message_count, last_activity_time} = item;
  const {navigate} = useNavigation();

  const {user: currentUser} = useUserContext();

  const userId = item?.users?.filter(user => user !== currentUser._id);
  const user = useUser(userId);

  const onPress = () => navigate('Chat', {chat: item});

  return (
    <TouchableOpacity
      style={styles.bigContainer}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.imageWrapper}>
        <UserRoundImage image={user?.image} userId={user?._id} size={50} />
      </View>
      <View style={styles.lineSeparator}>
        <View style={styles.detailsWrapper}>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.lastActivity} numberOfLines={1}>
            {last_activity}
          </Text>
        </View>
        <View>
          <ChatDate time={last_activity_time} active={message_count > 0} />
          <ChatNumberIndicator count={message_count} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  lineSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 2,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  lastActivity: {
    fontSize: 16,
    color: '#888',
    overflow: 'hidden',
  },
  detailsWrapper: {
    padding: 10,
    flex: 1,
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ddd',
  },
});

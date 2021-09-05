import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChatDate} from './ChatDate';
import {ChatNumberIndicator} from 'chat/ChatNumberIndicator';
import {UserRoundImage} from 'common/UserRoundImage';

export function ChatListItem({item}) {
  const {image, name, last_activity, message_count, last_activity_time, id} =
    item;
  const {navigate} = useNavigation();

  const onPress = () => navigate('Chat', {item});

  return (
    <TouchableOpacity
      style={styles.bigContainer}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.imageWrapper}>
        <UserRoundImage uri={image} size={50} />
      </View>
      <View style={styles.lineSeparator}>
        <View style={styles.detailsWrapper}>
          <Text style={styles.name}>{name}</Text>
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
    fontSize: 16,
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

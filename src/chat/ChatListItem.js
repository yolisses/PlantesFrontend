import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChatNumberIndicator} from 'chat/ChatNumberIndicator';
import FastImage from 'react-native-fast-image';

export function ChatListItem({item}) {
  const {image, name, last_activity, message_count} = item;
  const {navigate} = useNavigation();

  const onPress = () => navigate('Chat');

  return (
    <TouchableOpacity
      style={styles.bigContainer}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.imageWrapper}>
        <FastImage
          source={{uri: image, priority: FastImage.priority.normal}}
          style={styles.image}
        />
      </View>
      <View style={styles.lineSeparator}>
        <View style={styles.detailsWrapper}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastActivity} numberOfLines={1}>
            {last_activity}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.lastTime,
              message_count > 0 ? styles.lastTimeActive : false,
            ]}>
            Ontem
          </Text>
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
    borderColor: '#ccc',
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
  lastTime: {
    fontWeight: 'bold',
    color: '#bbb',
  },
  lastTimeActive: {
    color: '#0a3',
  },
  detailsWrapper: {
    padding: 10,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ddd',
  },
});

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {UserRoundImage} from 'common/UserRoundImage';

import {ChatNumberIndicator} from 'chat/ChatNumberIndicator';

export function ChatListItem() {
  const {navigate} = useNavigation();

  const onPress = () => navigate('Chat');

  return (
    <TouchableOpacity
      style={styles.bigContainer}
      activeOpacity={0.8}
      onPress={onPress}>
      <UserRoundImage size={50} />
      <View style={styles.lineSeparator}>
        <View style={styles.detailsWrapper}>
          <Text style={styles.name}>Ulisses</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            Eu disse que tinha falado alguma coisa depois da ultima coisa
          </Text>
        </View>
        <View>
          <Text style={styles.lastTime}>Ontem, 13:54</Text>
          <ChatNumberIndicator />
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
  lastMessage: {
    fontSize: 16,
    color: '#888',
    overflow: 'hidden',
  },
  lastTime: {
    fontWeight: 'bold',
    color: '#bbb',
  },
  detailsWrapper: {
    padding: 10,
    flex: 1,
  },
});

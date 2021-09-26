import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {UserRoundImage} from 'common/UserRoundImage';
import {useUserContext} from 'auth/userContext';
import {useUserById} from 'common/UsersByIdContext';

export function ChatListItem({chat}) {
  const {navigate} = useNavigation();

  const {userId: currentUserId} = useUserContext();

  const userId = chat.users.filter(user => user !== currentUserId)[0];

  const {getUserById} = useUserById(userId);
  const user = getUserById(userId);

  const onPress = () => navigate('Chat', {chat, user});

  return (
    <View>
      <TouchableOpacity
        style={styles.bigContainer}
        activeOpacity={0.8}
        onPress={onPress}>
        <View style={styles.imageWrapper}>
          <UserRoundImage image={user?.image} userId={user?._id} size={50} />
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.name}>{user?.name}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.lineSeparator} />
    </View>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  lineSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
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

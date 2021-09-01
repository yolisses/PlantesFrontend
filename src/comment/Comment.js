import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {UserRoundImage} from 'common/UserRoundImage';

import {TimeAgo} from 'comment/TimeAgo';
import {ReplyButton} from 'comment/ReplyButton';
import {LikesCounter} from 'comment/LikesCounter';

const {width} = Dimensions.get('window');

export function Comment({item, timeAgo, numberOfLikes}) {
  const {text, user} = item;
  return (
    <View style={styles.container}>
      <UserRoundImage size={40} style={styles.userImage} />
      <View>
        <Text style={styles.userName}>{user.name.toLowerCase()}</Text>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.buttonsWrapper}>
          <TimeAgo />
          <LikesCounter count={4} />
          <ReplyButton />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width - 60,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  userName: {
    color: '#888',
    // fontWeight: 'bold',
  },
  userImage: {
    // padding: 20,
  },
  text: {
    fontSize: 18,
    // padding: 4,
  },
});

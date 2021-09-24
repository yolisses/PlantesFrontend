import React, {useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, TextInput, View} from 'react-native';
import {ChatReference} from './ChatReference';
import {useChatRoom} from './ChatroomsContext';
import {SendMessageButton} from './SendMessageButton';

export function MessageInput({chatRoomId}) {
  const [text, setText] = useState('');

  async function onSendPress() {
    setText('');
  }

  const {chatRooms} = useChatRoom();

  const item = chatRooms[chatRoomId];

  const reference = item?.reference;

  return (
    <View style={styles.textButtonContainer}>
      <View style={styles.container}>
        {reference && (
          <View style={styles.referenceWrapper}>
            <ChatReference
              borderRadius={15}
              disableNavigation
              showCloseButton={true}
            />
          </View>
        )}
        <View style={styles.horizontal}>
          <TextInput
            multiline
            value={text}
            style={styles.input}
            onChangeText={setText}
            placeholder="Escrever mensagem"
          />
        </View>
      </View>
      <SendMessageButton onPress={onSendPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  textButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    padding: 5,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 20,
    elevation: 2,
  },
  horizontal: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    padding: 10,
    borderStyle: 'solid',
    // borderWidth: 1,
    borderColor: '#aaa',
    flex: 1,
    fontSize: 18,
  },
  referenceWrapper: {
    padding: 5,
    paddingBottom: 0,
  },
});

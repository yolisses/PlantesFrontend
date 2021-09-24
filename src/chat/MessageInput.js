import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ChatReference} from './ChatReference';
import {useSendingMessage} from './SendingMessageContext';
import {SendMessageButton} from './SendMessageButton';

export function MessageInput({chatRoomId, chatId, reference}) {
  const [text, setText] = useState('');
  const {pushMessage} = useSendingMessage();

  async function onSendPress() {
    pushMessage({text, chatId});
    setText('');
  }

  function onPressCloseButton() {}

  return (
    <View style={styles.textButtonContainer}>
      <View style={styles.container}>
        {reference && (
          <ChatReference
            borderRadius={15}
            disableNavigation
            reference={reference}
            showCloseButton={true}
            style={styles.reference}
            onPressCloseButton={onPressCloseButton}
          />
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
    elevation: 2,
    borderRadius: 20,
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
  reference: {
    padding: 5,
    paddingBottom: 0,
  },
});

import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ChatReference} from './ChatReference';
import {SendMessageButton} from './SendMessageButton';
import {useChatReference} from './ChatReferenceContext';
import {api} from 'api/api';

export function MessageInput({chatId, userId}) {
  const {chatReferences, removeOneChatReference} = useChatReference();
  const reference = chatReferences[chatId];

  const [text, setText] = useState('');

  const onPressCloseButton = () => {
    removeOneChatReference(chatId);
  };

  async function onSendPress() {
    if (text.trim() === '') {
      return;
    }
    try {
      const send = userId ? {toUserId: userId, text} : {chatId, text};
      await api.post('/sendmessage', send);
    } catch (err) {
      console.error(err.response);
    }
    setText('');
  }

  return (
    <View style={styles.textButtonContainer}>
      <View style={styles.container}>
        {reference && (
          <View style={styles.referenceWrapper}>
            <ChatReference
              borderRadius={15}
              showCloseButton={true}
              chatId={chatId}
              reference={reference}
              onPressCloseButton={onPressCloseButton}
              disableNavigation
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

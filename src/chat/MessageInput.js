import {useObserver} from 'mobx-react-lite';
import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {ChatReference} from './ChatReference';
import {pushMessage} from './chats';
import {SendMessageButton} from './SendMessageButton';

export function MessageInput({chat, reference}) {
  const [text, setText] = useState();

  async function onSendPress() {
    if (!text) {
      return;
    }
    pushMessage({text, chat});
    setText(null);
  }

  function onPressCloseButton() {}

  return useObserver(() => (
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
            value={text}
            multiline
            style={styles.input}
            placeholder="Escrever mensagem"
            onChangeText={text => {
              setText(text);
            }}
          />
        </View>
      </View>
      <SendMessageButton onPress={onSendPress} />
    </View>
  ));
}

const styles = StyleSheet.create({
  textButtonContainer: {
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    elevation: 2,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  horizontal: {
    padding: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    borderColor: '#aaa',
    borderStyle: 'solid',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  reference: {
    padding: 5,
    paddingBottom: 0,
  },
});

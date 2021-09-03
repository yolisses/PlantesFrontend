import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ChatItemReference} from './ChatItemReference';
import {useChatReference} from './ChatReferenceContext';
import {SendMessageButton} from './SendMessageButton';

export function MessageInput({chatId}) {
  const {chatReferences} = useChatReference();
  const reference = chatReferences[chatId];

  return (
    <View style={styles.textButtonContainer}>
      <View style={styles.container}>
        <View style={styles.referenceWrapper}>
          {reference && (
            <ChatItemReference borderRadius={15} showCloseButton={true} />
          )}
        </View>
        <View style={styles.horizontal}>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Escrever mensagem"
          />
        </View>
      </View>
      <SendMessageButton />
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

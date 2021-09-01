import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ChatItemReference} from './ChatItemReference';
import {SendMessageButton} from './SendMessageButton';

export function MessageInput({text}) {
  return (
    <View style={styles.textButtonContainer}>
      <View style={styles.container}>
        {/* <ChatItemReference /> */}
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
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
});

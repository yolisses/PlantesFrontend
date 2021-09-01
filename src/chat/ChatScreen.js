import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Message} from 'chat/Message';
import {MessageInput} from 'chat/MessageInput';

export function ChatScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View style={styles.pad}>
          <Message text="Oi cara, como vai?" />
          <Message text="Gostaria de trocar essa planta?" />
          <Message text="Sim, podes crer!" fromUser={true} moreMargin={true} />
          <Message text="Beleza então" moreMargin={true} />
          <Message text="Quer qual das minhas?" />
          <Message
            text="Eu vi aquele pé de pêssego, achei massa todo"
            fromUser
            moreMargin={true}
          />
          <Message text="Nem sabia que dava pra plantar dele aqui" fromUser />
          <Message text="Pois é" moreMargin={true} />
          <Message text="Eu tmb n kkkk" />
          <Message
            text="teste kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
            fromUser
            moreMargin={true}
          />
          <Message
            text="outro teste kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
            moreMargin={true}
          />
        </View>
      </ScrollView>
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  pad: {
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

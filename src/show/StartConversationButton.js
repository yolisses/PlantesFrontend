import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {faCommentAlt} from '@fortawesome/free-regular-svg-icons';

import {LightButton} from 'common/LightButton';
import {useChatReference} from 'chat/ChatReferenceContext';

export function StartConversetionButton({item}) {
  const {navigate} = useNavigation();
  const {setOneChatReference} = useChatReference();

  const onPress = () => {
    setOneChatReference(item.owner.id, {type: 'plant', plantId: item.id});
    navigate('Chat', {chatId: item.owner.id});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <LightButton
        text="Mandar mensagem"
        icon={faCommentAlt}
        style={styles.messageButton}
        textStyle={styles.messageButtonText}
        onPress={onPress}
        iconColor="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  messageButton: {
    backgroundColor: 'green',
    marginRight: 4,
  },
  messageButtonText: {
    color: 'white',
  },
});

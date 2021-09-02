import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {faCommentAlt} from '@fortawesome/free-regular-svg-icons';

import {LightButton} from 'common/LightButton';

export function StartConversetionButton({item}) {
  const {navigate} = useNavigation();

  const onPress = () => {
    navigate('Chat', {chatId: 1});
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

import React from 'react';
import {StyleSheet, View} from 'react-native';

import {faCommentAlt} from '@fortawesome/free-regular-svg-icons';

import {LightButton} from 'common/LightButton';
import {LoadingStartConversetionButton} from './LoadingStartConversationButton';

export function StartConversetionButton({onPress, loading}) {
  if (loading) {
    return <LoadingStartConversetionButton />;
  }

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
  },
  messageButtonText: {
    color: 'white',
  },
});

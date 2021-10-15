import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export function MessageStatus({status = 'visualized'}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {status === 'sending' && (
        <FastImage
          style={styles.icon}
          source={require('./assets/loading.png')}
        />
      )}
      {status === 'sent' && (
        <FastImage style={styles.icon} source={require('./assets/check.png')} />
      )}
      {status === 'received' && (
        <FastImage
          style={styles.icon}
          source={require('./assets/double_check.png')}
        />
      )}
      {status === 'visualized' && (
        <FastImage
          style={styles.icon}
          source={require('./assets/double_check_active.png')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
    marginLeft: 3,
  },
});

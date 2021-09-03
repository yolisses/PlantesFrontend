import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useAlert} from 'alert/AlertContext';
import {StartConversationAlert} from './StartConversationAlert';
import {LoadingAvailabilityInfo} from './LoadingAvailabilityInfo';

export function AvailabilityInfo({item, onModalConfirmPress}) {
  const {showAlert} = useAlert();
  const onPress = () => {
    showAlert(
      <StartConversationAlert item={item} onSendPress={onModalConfirmPress} />,
    );
  };

  if (!item) {
    return <LoadingAvailabilityInfo />;
  }

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.line}>
        <Text style={styles.emphasis}>Doação</Text>
        <Text style={styles.secondary}>, </Text>
        <Text style={styles.emphasis}>Trocar</Text>
        <Text style={styles.secondary}> ou </Text>
        <View>
          <Text style={styles.emphasis}>R$100,00</Text>
        </View>
      </View>
      <View style={styles.line}>
        <Text style={styles.secondary}> 1 disponível</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 0.9,
    color: 'green',
  },
  line: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  emphasis: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  secondary: {
    fontSize: 18,
    color: '#555',
  },
});

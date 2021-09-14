import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useAlert} from 'alert/AlertContext';
import {StartConversationAlert} from './StartConversationAlert';
import {LoadingAvailabilityInfo} from './LoadingAvailabilityInfo';

export function AvailabilityInfo({item, onModalConfirmPress}) {
  const {showAlert} = useAlert();
  const onPress = () => {
    // showAlert(
    //   <StartConversationAlert item={item} onSendPress={onModalConfirmPress} />,
    // );
  };

  if (!item) {
    return <LoadingAvailabilityInfo />;
  }

  const options = {
    donate: item.donate,
    swap: item.swap,
    price: item.price,
  };

  const translation = entry => {
    return {
      donate: 'Doação',
      swap: 'Trocar',
      price: 'R$' + Number(entry[1]).toFixed(2),
    }[entry[0]];
  };

  const getSeparator = (index, array) => {
    switch (index) {
      case 0:
        return null;
      case array.length - 1:
        return <Text style={styles.secondary}> ou </Text>;
      default:
        return <Text style={styles.secondary}>, </Text>;
    }
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.line}>
        {Object.entries(options)
          .filter(oprion => oprion[1])
          .map((entry, index, array) => (
            <>
              {getSeparator(index, array)}
              <Text style={styles.emphasis}>{translation(entry)}</Text>
            </>
          ))}
      </View>
      <View style={styles.line}>
        {item.amount && (
          <Text style={styles.secondary}> {item.amount} disponível</Text>
        )}
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

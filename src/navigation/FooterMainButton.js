import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export function FooterMainButton({icon, route, selected, doubleClickRoute}) {
  const size = 26;
  const color = '#070';

  const {navigate} = useNavigation();

  return (
    <View style={[styles.button, {backgroundColor: color}]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          selected === route && doubleClickRoute
            ? navigate(doubleClickRoute)
            : navigate(route)
        }
        style={{alignItems: 'center'}}>
        <FontAwesomeIcon icon={icon} size={size} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    padding: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#070',
  },
});

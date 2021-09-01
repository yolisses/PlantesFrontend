import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';

export function FooterButton({icon, route, text, selected}) {
  const size = 26;
  const color = selected === route ? '#070' : '#bbb';

  const {navigate} = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate(route)}
        style={{alignItems: 'center'}}
        activeOpacity={0.6}>
        <FontAwesomeIcon icon={icon} size={size} color={color} />
        {/* <Text style={{color}}>{text}</Text> */}
      </TouchableOpacity>
    </View>
  );
}

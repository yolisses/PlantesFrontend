import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import {basicHitSlop} from 'utils/basicHitSlop';

export function FooterButton({icon, route, selected}) {
  const color = selected === route ? '#070' : '#bbb';

  const {navigate} = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate(route)}
        hitSlop={basicHitSlop}
        style={{alignItems: 'center'}}
        activeOpacity={0.6}>
        <FontAwesomeIcon icon={icon} size={25} color={color} />
      </TouchableOpacity>
    </View>
  );
}

import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {UserRoundImage} from 'common/UserRoundImage';
import React from 'react';
import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
import {LoadingItemInfo} from './LoadingItemInfo';
import {TagsList} from './TagsList';

const {width} = Dimensions.get('window');

export function ItemInfo({scrollTo, item}) {
  // if (!item) {
  //   return <LoadingItemInfo />;
  // }

  return (
    <View>
      <Text style={styles.title}>{item?.name}</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.userWrapper}>
          <View style={styles.owner}>
            <UserRoundImage item={item?.owner} size={50} thumbnail />
            <View style={{marginLeft: 6}}>
              <Text style={styles.userName}>{item?.owner?.name || ''}</Text>
              <Text style={styles.distance}>
                {item?.distance} quilômetros daqui
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.aboutWrapper}
        onPress={() => scrollTo(width + 80)}>
        <FontAwesomeIcon icon={faChevronDown} color={'gray'} />
        <Text style={styles.about}>Detalhes</Text>
      </Pressable>
      <TagsList tags={item?.tags || []} />
      <View style={styles.aboutWrapper}>
        <FontAwesomeIcon icon={faChevronDown} color={'gray'} />
        <Text style={styles.about}>Descrição</Text>
      </View>
      <Text style={styles.about}>{item?.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginHorizontal: 10,
  },
  distance: {
    fontSize: 18,
  },
  owner: {
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  belongsTo: {
    marginTop: 20,
    marginLeft: 14,
    fontSize: 18,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  about: {
    fontSize: 18,
    marginBottom: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  aboutWrapper: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

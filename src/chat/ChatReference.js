import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/core';
import {api} from 'api/api';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
export function ChatReference({
  reference,
  showCloseButton,
  borderRadius = 9,
  disableNavigation,
  onPressCloseButton,
}) {
  const [data, setData] = useState();

  async function getData() {
    if (reference.type === 'plant') {
      try {
        const res = await api.get('/plant/' + reference.id);
        const plant = res.data;
        const newData = {
          main: plant?.name,
          image: plant?.card,
        };
        setData(newData);
      } catch (err) {
        console.error(err);
      }
    }
  }

  useEffect(() => {
    getData();
    return getData;
  }, [reference]);

  const {navigate} = useNavigation();

  const onPress = () => {
    if (disableNavigation) {
      return;
    }
    navigate('ShowItem', {itemId: reference?.plantId});
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={disableNavigation ? 1 : 0.7}>
      <View style={[styles.inner, {borderRadius}]}>
        {/* <Text>{JSON.stringify(reference)}</Text> */}
        <FastImage
          source={{uri: data?.image}}
          style={[styles.image, {borderRadius}]}
        />
        <View style={styles.titleSubtitleContainer}>
          {showCloseButton && (
            <TouchableOpacity
              style={styles.closeOption}
              activeOpacity={0.7}
              onPress={onPressCloseButton}>
              <FontAwesomeIcon size={23} icon={faTimes} color={'#aaa'} />
            </TouchableOpacity>
          )}
          <Text
            style={[styles.title, showCloseButton && {paddingRight: 20}]}
            numberOfLines={1}>
            {data?.main}
          </Text>
          {/* <Text style={styles.subtitle} numberOfLines={2}>
            <Text>Doação</Text>,<Text> Trocar</Text> ou
            <Text> R$100,00</Text>
          </Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 220,
  },
  inner: {
    elevation: 1,
    flexDirection: 'row',
    backgroundColor: '#00000008',
  },
  image: {
    backgroundColor: '#00000008',
    width: 75,
    aspectRatio: 1,
  },
  titleSubtitleContainer: {
    paddingHorizontal: 5,
    overflow: 'hidden',
    paddingVertical: 2,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  closeOption: {
    position: 'absolute',
    padding: 20,
    paddingBottom: 20,
    top: -14,
    right: -14,
  },
});

import React, {useState} from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export function ExpandableImage() {
  const [expand, setExpand] = useState(true);
  return (
    <View style={styles.container}>
      <Pressable
      //  onPress={() => setExpand(!expand)}
      >
        <FastImage
          style={expand ? styles.image : styles.imageShowLess}
          source={require('post/mock/plant.jpg')}
        />
      </Pressable>
    </View>
  );
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: width,
    flex: 1,
  },
  imageShowLess: {
    width: width,
    height: width / 1.6,
    flex: 1,
  },
});

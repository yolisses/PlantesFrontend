import React from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SquareImage} from '../SquareImage';

const {width} = Dimensions.get('window');

export function ImageMiniList({images, selected, scrollTo}) {
  const renderItem = ({item: image, index}) => (
    <Pressable onPress={() => scrollTo(index)}>
      <SquareImage
        key={index}
        uri={image}
        fraction={selected === index ? 5.6 : 5.8}
        offset={1}
        style={selected === index ? styles.selected : styles.unselected}
      />
    </Pressable>
    // <Text>{item}</Text>
  );

  return (
    <View style={{height: width / 5.8}}>
      {images.length > 1 ? (
        <FlatList
          horizontal={true}
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.image}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.95}
          getItemLayout={(data, index) => ({
            length: width / 5.8,
            offset: (width / 5.8) * index,
            index,
          })}
        />
      ) : (
        <Text style={styles.text}>1 imagem disponível</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'gray',
  },
  unselected: {},
  selected: {
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 0,
    borderColor: '#ff0f',
  },
});

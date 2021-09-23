import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DraggableGrid from 'react-native-draggable-grid';
import {useImageGroup} from 'camera/ImageGroupContext';
import {SquareImage} from 'common/SquareImage';

export function ImageOrderSelect() {
  const {images, setImages} = useImageGroup();
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const columnsNumber = 3;

  function render_item(item, index) {
    return (
      <View style={styles.item} key={item.key}>
        <SquareImage uri={item.key} fraction={columnsNumber} offset={2} />
        <Text style={styles.itemText}>{index + 1}</Text>
      </View>
    );
  }

  if (images && images.length === 0) {
    return null;
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.wrapper}>
          <DraggableGrid
            numColumns={columnsNumber}
            renderItem={render_item}
            data={images.map(image => {
              return {
                key: image,
              };
            })}
            onDragStart={() => setScrollEnabled(false)}
            onDragging={() => setScrollEnabled(false)}
            onDragRelease={data => {
              setScrollEnabled(true);
              setImages(data.map(item => item.key)); // need reset the props data sort after drag release
            }}
          />
        </View>
      </ScrollView>
      {images?.length > 1 && (
        <Text style={styles.tip}>
          Você pode mudar a ordem arrastando as imagens
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tip: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 2,
    color: '#666',
    marginBottom: 4,
    paddingHorizontal: 3,
  },
  itemText: {
    color: '#fff',
    position: 'absolute',
    bottom: 2,
    right: 2,
    fontSize: 16,
    paddingHorizontal: 4,
    borderTopLeftRadius: 8,
    backgroundColor: '#0006',
  },
  wrapper: {
    marginBottom: 80,
  },
});

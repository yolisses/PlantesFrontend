import {FlatList} from 'react-native';
import React, {useState} from 'react';

import {width} from 'utils/width';
import {SelectableImage} from './SelectableImage';
import {usePublish} from './PublishContext';

const numberOfCollums = 3;

export function LocalImagesSelector({flatListHeader}) {
  const {state, dispatch} = usePublish();
  const images = state.images || {};
  const [foundImages, setFoundImages] = useState([]);

  const getImageIndex = uri =>
    images[uri] ? Object.keys(images).indexOf(uri) + 1 : null;

  return (
    <FlatList
      data={foundImages}
      numColumns={numberOfCollums}
      keyExtractor={item => item.uri}
      ListHeaderComponent={flatListHeader}
      showsVerticalScrollIndicator={false}
      getItemLayout={(data, index) => {
        return {
          length: width / numberOfCollums,
          offset: ((width / numberOfCollums) * index) % numberOfCollums,
          index,
        };
      }}
      renderItem={({item: {uri}}) => {
        return (
          <SelectableImage
            uri={uri}
            dispatch={dispatch}
            index={getImageIndex(uri)}
          />
        );
      }}
    />
  );
}

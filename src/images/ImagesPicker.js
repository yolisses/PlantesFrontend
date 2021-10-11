import React, {useEffect, useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {FlatList, View} from 'react-native';

import {width} from 'utils/width';

import {allPhotosAlbum} from './allPhotosAlbum';
import {SelectableImage} from './SelectableImage';
import {SelectImageAlbumButton} from './SelectImageAlbumButton';

import {selectedAlbum} from 'publish/selectedAlbum';
import {BackButton} from '../common/BackButton';
import {ImagesLimitAlert} from '../publish/ImagesLimitAlert';
import {imagesLimit} from '../publish/imagesLimit';
import {useAlert} from 'alert/AlertContext';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {CustomHeader} from '../common/CustomHeader';
import {NextButton} from '../common/NextButton';

const numberOfCollums = 3;

export function ImagesPicker({value, onChange, onFinish}) {
  const [foundImages, setFoundImages] = useState([]);

  async function getPhotos() {
    CameraRoll.getPhotos({
      groupName:
        selectedAlbum.name !== allPhotosAlbum ? selectedAlbum.name : undefined,
      first: 78,
    })
      .then(res => {
        
        setFoundImages(res.edges.map(edge => edge.node.image.uri));
      })
      .catch(err => console.error(err));
  }

  const {showAlert} = useAlert();

  function pushImage({value, uri, limitCallback}) {
    const newValue = {...value};
    let counter = Object.keys(newValue).length + 1;
    if (counter > imagesLimit) {
      limitCallback();
      return newValue;
    }
    newValue[uri] = counter;
    return newValue;
  }

  function removeImage({value, uri}) {
    const newValue = {...value};
    delete newValue[uri];
    let counter = 1;
    for (let key in newValue) {
      newValue[key] = counter;
      counter += 1;
    }
    return newValue;
  }

  function change(getUri) {
    const uri = getUri();
    if (!value[uri]) {
      onChange(value =>
        pushImage({
          uri,
          value,
          limitCallback: () => showAlert(<ImagesLimitAlert />),
        }),
      );
    } else {
      onChange(value => removeImage({uri, value}));
    }
  }

  function onFinishPress() {
    onFinish();
  }

  useEffect(() => {
    getPhotos();
  }, [selectedAlbum]);

  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <CustomHeader
          left={<BackButton icon={faTimes} />}
          center={<SelectImageAlbumButton />}
          right={<NextButton text="Pronto" hideIcon onPress={onFinishPress} />}
        />
      </View>
      <FlatList
        data={foundImages}
        numColumns={numberOfCollums}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        getItemLayout={(data, index) => {
          const size = width / numberOfCollums;
          return {
            length: size,
            offset: (size * index) % numberOfCollums,
            index,
          };
        }}
        renderItem={({item: uri}) => (
          <SelectableImage
            key={uri}
            uri={uri}
            change={change}
            index={value[uri]}
            selectedImages={value}
          />
        )}
      />
    </>
  );
}

import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import CameraRoll from '@react-native-community/cameraroll';

import {CameraPreview} from './CameraPreview';
import {OptionsWrapper} from './OptionWrapper';
import {PicturePreview} from './PicturePreview';
import {CameraSnapButton} from './CameraSnapButton';
import {TurnCameraButton} from './TurnCameraButton';
import {CameraSquareFocus} from './CameraFocusSquare';
import {GoBackCameraButton} from './GoBackCameraButton';
import {FlashSelectorButton} from './FlashSelectorButton';
import {PictureConfirmButtons} from './PictureConfirmButtons';
import {usePublish} from 'publish/PublishContext';
import {imagesLimit} from 'publish/imagesLimit';

import RNGRP from 'react-native-get-real-path';
import {useImages} from 'publish/ImagesContext';
import {useShallowData} from 'publish/ShallowDataContext';

const ID = 'images';

export function CameraScreen() {
  const cameraRef = useRef();
  const [uri, setUri] = useState();
  const {goBack} = useNavigation();
  const {images, setImages, setRefresh} = useImages();
  const {data} = useShallowData();
  const [pictureTook, setPictureTook] = useState(false);

  const takePicture = async () => {
    const options = {quality: 1};
    const {uri} = await cameraRef.current.takePictureAsync(options);
    setUri(uri);
  };

  const resume = () => setPictureTook(false);

  function approve() {
    CameraRoll.save(uri, {type: 'photo', album: 'Plantei'}).then(uri =>
      RNGRP.getRealPathFromURI(uri).then(filePath => {
        const uri = 'file://' + filePath;
        if (Object.keys(images || {}).length < imagesLimit) {
          setRefresh(Math.random());
          setImages(images => {
            const copy = {};
            let counter = 1;
            for (let item in images) {
              copy[item] = counter;
              counter++;
            }
            if (counter > imagesLimit) {
              return images;
            }
            copy[uri] = counter;
            data[images] = copy;
            return copy;
          });
        }
      }),
    );
    goBack();
  }

  useEffect(() => uri && setPictureTook(true), [uri]);

  return (
    <View style={styles.container}>
      <CameraPreview ref={cameraRef} />
      {pictureTook && <PicturePreview uri={uri} />}
      <View style={styles.topLayer}>
        <OptionsWrapper style={{flexDirection: 'row-reverse'}}>
          {!pictureTook && <GoBackCameraButton />}
        </OptionsWrapper>
        <CameraSquareFocus />
        <OptionsWrapper>
          {!pictureTook ? (
            <>
              <FlashSelectorButton />
              <CameraSnapButton onPress={takePicture} />
              <TurnCameraButton />
            </>
          ) : (
            <PictureConfirmButtons
              onDiscardPress={resume}
              onApprovePress={approve}
            />
          )}
        </OptionsWrapper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topLayer: {
    height: '100%',
    position: 'absolute',
  },
});

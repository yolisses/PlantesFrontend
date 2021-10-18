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
import {imagesLimit} from 'images/imagesLimit';

import RNGRP from 'react-native-get-real-path';
import {selectedImages} from 'publish/selectedImages';

export function CameraScreen() {
  const cameraRef = useRef();
  const [uri, setUri] = useState();
  const {goBack} = useNavigation();
  const [pictureTook, setPictureTook] = useState(false);

  const takePicture = async () => {
    const options = {quality: 1};
    const {uri} = await cameraRef.current.takePictureAsync(options);
    setUri(uri);
  };

  const resume = () => setPictureTook(false);

  async function approve() {
    const savedUri = await CameraRoll.save(uri, {
      type: 'photo',
      album: 'Plantes',
    });
    const filePath = await RNGRP.getRealPathFromURI(savedUri);
    const newUri = 'file://' + filePath;
    const pos = Object.keys(selectedImages).length;
    if (pos < imagesLimit) {
      selectedImages[newUri] = pos;
    }
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

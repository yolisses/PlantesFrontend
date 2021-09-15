import {useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import FastImage from 'react-native-fast-image';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, StyleSheet, View} from 'react-native';

import {CameraSnapButton} from 'camera/CameraSnapButton';
import {PictureConfirmButtons} from 'camera/PictureConfirmButtons';
import CameraRoll from '@react-native-community/cameraroll';
import {GoBackCameraButton} from './GoBackCameraButton';
import {CameraSquareFocus} from './CameraFocusSquare';
import {TurnCameraButton} from './TurnCameraButton';
import {OptionsWrapper} from './OptionWrapper';
import {FlashSelectorButton} from './FlashSelectorButton';
import {useCameraPreferences} from './contexts/CameraPreferencesContext';

export function CameraScreen() {
  const {goBack} = useNavigation();
  const cameraRef = useRef();

  const {flash, type} = useCameraPreferences();

  const [pictureTook, setPictureTook] = useState(false);
  const [uri, setUri] = useState();

  const takePicture = async () => {
    const options = {quality: 1, base64: true};
    try {
      const {uri} = await cameraRef.current.takePictureAsync(options);
      setUri(uri);
    } catch (err) {
      console.error(err);
    }
  };

  function resume() {
    setPictureTook(false);
  }

  function approve() {
    CameraRoll.save(uri, {type: 'photo', album: 'Plantei'});
    goBack();
    resume();
  }

  useEffect(() => {
    if (uri) {
      setPictureTook(true);
    }
  }, [uri]);

  return (
    <View style={styles.container}>
      <RNCamera
        type={type}
        ref={cameraRef}
        flashMode={flash}
        captureAudio={false}
        style={styles.preview}
        pauseAfterCapture={true}
      />
      {pictureTook && (
        <FastImage
          source={{uri, priority: FastImage.priority.high}}
          style={[styles.preview, styles.image]}
        />
      )}
      <View style={styles.topLayer}>
        <OptionsWrapper>
          {!pictureTook && (
            <>
              <View />
              <GoBackCameraButton />
            </>
          )}
        </OptionsWrapper>
        <CameraSquareFocus />
        <OptionsWrapper>
          {!pictureTook && <FlashSelectorButton />}
          {!pictureTook ? (
            <CameraSnapButton onPress={takePicture} />
          ) : (
            <PictureConfirmButtons
              onDiscardPress={resume}
              onApprovePress={approve}
            />
          )}
          {!pictureTook && <TurnCameraButton />}
        </OptionsWrapper>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    position: 'absolute',
    width,
    height,
  },
  image: {
    backgroundColor: '#0000',
  },
  topLayer: {
    height: '100%',
    position: 'absolute',
  },
});

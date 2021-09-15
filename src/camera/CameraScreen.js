import {useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import FastImage from 'react-native-fast-image';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, StyleSheet, View} from 'react-native';

import {CameraSnapButton} from 'camera/CameraSnapButton';
import {CameraCentralWrapper} from 'camera/CameraCentralWrapper';
import {PictureConfirmButtons} from 'camera/PictureConfirmButtons';
import CameraRoll from '@react-native-community/cameraroll';
import {GoBackCameraButton} from './GoBackCameraButton';
import {CameraSquareFocus} from './CameraFocusSquare';
import {TurnCameraButton} from './TurnCameraButton';

export function CameraScreen() {
  const {goBack} = useNavigation();
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const cameraRef = useRef();

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
        <View style={[styles.optionsWrapper, {alignItems: 'flex-start'}]}>
          {!pictureTook && <TurnCameraButton type={type} setType={setType} />}
        </View>
        <CameraSquareFocus />
        <CameraCentralWrapper>
          {!pictureTook ? (
            <CameraSnapButton onPress={takePicture} />
          ) : (
            <PictureConfirmButtons
              onDiscardPress={resume}
              onApprovePress={approve}
            />
          )}
        </CameraCentralWrapper>
        <View
          style={[
            styles.optionsWrapper,
            {flexDirection: 'row-reverse', paddingHorizontal: 25},
          ]}>
          {!pictureTook && <TurnCameraButton type={type} setType={setType} />}
        </View>
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
  optionsWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0005',
  },
});

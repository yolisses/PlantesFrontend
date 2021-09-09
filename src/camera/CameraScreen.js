import {useRef} from 'react';
import {RNCamera} from 'react-native-camera';
import FastImage from 'react-native-fast-image';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';

import {faArrowLeft, faUndo} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {CameraSnapButton} from 'camera/CameraSnapButton';
import {CameraCentralWrapper} from 'camera/CameraCentralWrapper';
import {PictureConfirmButtons} from 'camera/PictureConfirmButtons';
import {useDispatch} from 'react-redux';

const optionButtonSize = 25;

export function CameraScreen() {
  const dispatch = useDispatch();

  const {navigate} = useNavigation();
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const cameraRef = useRef();

  const [pictureTook, setPictureTook] = useState(false);
  const [uri, setUri] = useState();

  const turnCameraDirection = () => {
    setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

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
    dispatch({type: 'ADD_IMAGE', uri});
    navigate('Publish');

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
        style={styles.preview}
        type={type}
        ref={cameraRef}
        pauseAfterCapture={true}
        captureAudio={false}
      />
      {pictureTook && (
        <FastImage
          source={{uri, priority: FastImage.priority.high}}
          style={[styles.preview, styles.image]}
        />
      )}
      <View style={styles.topLayer}>
        <View style={[styles.optionsWrapper, {alignItems: 'flex-start'}]}>
          {!pictureTook ? (
            <TouchableOpacity
              onPress={() => navigate('Publish')}
              style={styles.goBackOption}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                color="white"
                size={optionButtonSize}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.focus} />

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

        <View style={[styles.optionsWrapper, {flexDirection: 'row-reverse'}]}>
          {!pictureTook ? (
            <TouchableOpacity
              onPress={turnCameraDirection}
              style={styles.turnCameraOption}>
              <FontAwesomeIcon
                icon={faUndo}
                color="white"
                size={optionButtonSize}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const optionButtonPadding = 10;

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
  focus: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#0000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff7',
  },
  topLayer: {
    height: '100%',
    position: 'absolute',
  },
  optionsWrapper: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0005',
    alignItems: 'center',
  },
  turnCameraOption: {
    marginHorizontal: optionButtonSize,
    padding: optionButtonPadding,
  },
  goBackOption: {
    marginHorizontal: optionButtonSize / 2,
    marginTop: optionButtonSize / 2,
    padding: optionButtonPadding,
  },
});

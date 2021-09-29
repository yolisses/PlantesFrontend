import React from 'react';

import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {useSending} from 'send/SendingContext';
import {formatToPlant} from 'send/formatToPlant';

import {NextButton} from './NextButton';
import {publishData} from './publishData';
import {discard} from './discard';
import {selectedImages} from './selectedImages';

export function FinishButton() {
  const {pushSending} = useSending();
  const {dispatch} = useNavigation();

  function resetNavigation() {
    dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    });
  }

  function onPress() {
    resetNavigation();
    publishData.images = selectedImages;
    const plant = formatToPlant(publishData);
    pushSending(plant);
    discard(selectedImages);
    discard(publishData);
  }

  return <NextButton route="Home" text="Enviar" customOnPress={onPress} />;
}

import React from 'react';

import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {useSending} from 'send/SendingContext';
import {formatToPlant} from 'send/formatToPlant';

import {NextButton} from './NextButton';
import {useImages} from './ImagesContext';
import {useShallowData} from './ShallowDataContext';

export function FinishButton() {
  const {send} = useSending();
  const {dispatch} = useNavigation();

  const {discard: discardImagesSelection} = useImages();
  const {data: shallowData, discard: discardShallowData} = useShallowData();

  const {pushSending} = useSending();

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
    send();
    const sending = formatToPlant(shallowData);
    pushSending(sending);
    discardImagesSelection();
    discardShallowData();
  }

  return <NextButton route="Home" text="Enviar" customOnPress={onPress} />;
}

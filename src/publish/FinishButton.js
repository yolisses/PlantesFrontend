import React from 'react';

import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {useSending} from 'send/SendingContext';
import {NextButton} from './NextButton';
import {reset} from './publishData';

export function FinishButton() {
  const {pushSending} = useSending();
  const {dispatch} = useNavigation();

  const discardImagesSelection = () => {};

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
    pushSending();
    discardImagesSelection();
    reset();
  }

  return <NextButton route="Home" text="Enviar" customOnPress={onPress} />;
}

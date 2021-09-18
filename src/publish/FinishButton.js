import React from 'react';
import {useSending} from 'send/SendingContext';
import {NextButton} from './NextButton';

import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

export function FinishButton() {
  const {send} = useSending();
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
    send();
  }

  return <NextButton route="Home" text="Enviar" customOnPress={onPress} />;
}

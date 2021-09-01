import React from 'react';
import {useAlert} from './AlertContext';

export function AlertDisplay({children}) {
  const {currentAlert, alertActive} = useAlert();
  return (
    <>
      {alertActive ? currentAlert : null}
      {children}
    </>
  );
}

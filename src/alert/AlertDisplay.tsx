import React from 'react';
import {useAlert} from './AlertContext';

interface AlertDisplayProps {
  children?: JSX.Element;
}

export function AlertDisplay({children}: AlertDisplayProps) {
  const {currentAlert, alertActive} = useAlert();
  return (
    <>
      {alertActive ? currentAlert : null}
      {children}
    </>
  );
}

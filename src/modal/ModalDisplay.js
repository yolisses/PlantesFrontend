import React from 'react';
import {useModal} from 'modal/ModalContext';

export function ModalDisplay({children}) {
  const {currentModal, modalActive} = useModal();
  return (
    <>
      {modalActive ? currentModal : null}
      {children}
    </>
  );
}

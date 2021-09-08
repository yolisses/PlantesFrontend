import React, {useEffect, useRef} from 'react';
import {useModal} from 'modal/ModalContext';
import {Modalize} from 'react-native-modalize';
import {Text} from 'react-native';

export function ModalDisplay({children}) {
  const {currentModal, modalActive} = useModal();

  const ref = useRef();

  useEffect(() => {
    console.error('oi');
    if (modalActive && currentModal) {
      ref.current.open();
    }
  }, [modalActive, currentModal]);

  return (
    <>
      {modalActive ? (
        <Modalize ref={ref}>
          <Text>oi</Text>
        </Modalize>
      ) : null}
      {children}
    </>
  );
}

import React, {useEffect, useRef} from 'react';
import {useModal} from 'modal/ModalContext';
import {Modalize} from 'react-native-modalize';
import {StyleSheet, Text} from 'react-native';
import {ApplyButton} from 'search/ApplyButton';

export function ModalDisplay() {
  const {currentModal, modalActive, modalOptions} = useModal();

  const ref = useRef();

  useEffect(() => {
    if (modalActive && currentModal) {
      ref.current.open();
    }
  }, [modalActive, currentModal]);

  return (
    <>
      {modalActive && currentModal ? (
        <Modalize
          ref={ref}
          snapPoint={modalOptions.snapPoint || 200}
          handlePosition={'inside'}
          handleStyle={styles.handle}
          {...modalOptions}>
          {currentModal}
        </Modalize>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  handle: {
    backgroundColor: '#bbb',
  },
});

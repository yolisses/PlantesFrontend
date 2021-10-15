import React, {useEffect, useRef, useState} from 'react';
import {useModal} from 'modal/ModalContext';
import {Modalize} from 'react-native-modalize';
import {StyleSheet} from 'react-native';
import {useObserver} from 'mobx-react-lite';

export function ModalDisplay() {
  const {currentModal, modalActive, modalOptions} = useModal();

  const [showFloating, setShowFloating] = useState(true);

  const ref = useRef();

  useEffect(() => {
    if (modalActive && currentModal) {
      ref.current.open();
    }
  }, [modalActive, currentModal]);

  const {FloatingComponent, onClosed, ...rest} = modalOptions;

  return useObserver(() => (
    <>
      {modalActive && currentModal ? (
        <Modalize
          ref={ref}
          onClose={() => setShowFloating(false)}
          onClosed={e => {
            setShowFloating(true);
            if (onClosed) {
              onClosed(e);
            }
          }}
          snapPoint={modalOptions.snapPoint || 200}
          handlePosition={'inside'}
          FloatingComponent={showFloating && FloatingComponent}
          handleStyle={styles.handle}
          {...rest}>
          {currentModal}
        </Modalize>
      ) : null}
    </>
  ));
}

const styles = StyleSheet.create({
  handle: {
    backgroundColor: '#bbb',
  },
});

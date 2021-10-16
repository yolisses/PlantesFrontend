import React, {useEffect, useRef, useState} from 'react';
import {useModal} from 'modal/ModalContext';
import {Modalize} from 'react-native-modalize';
import {StyleSheet} from 'react-native';
import {Observer, useObserver} from 'mobx-react-lite';

export function ModalDisplay() {
  const {currentModal, modalActive, closeModal, modalOptions} = useModal();

  const [showFloating, setShowFloating] = useState(true);

  const ref = useRef();

  useEffect(() => {
    if (modalActive && currentModal) {
      ref.current.open();
    }
  }, [modalActive, currentModal]);

  const {FloatingComponent, onClosed, ...rest} = modalOptions;

  return (
    <Observer>
      {() => (
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
              handlePosition={'inside'}
              snapPoint={modalOptions.snapPoint || 200}
              overlayStyle={{backgroundColor: '#0006'}}
              FloatingComponent={showFloating && FloatingComponent}
              handleStyle={styles.handle}
              {...rest}>
              {currentModal}
            </Modalize>
          ) : null}
        </>
      )}
    </Observer>
  );
}

const styles = StyleSheet.create({
  handle: {
    backgroundColor: '#bbb',
  },
});

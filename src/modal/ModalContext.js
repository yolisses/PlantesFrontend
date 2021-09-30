import React from 'react';
import {createContext, useContext, useEffect, useState} from 'react';

const ModalContext = createContext();

export function ModalContextProvider({children}) {
  const [modalActive, setModalActive] = useState(false);
  const [snapPoint, setSnapPoint] = useState(200);
  const [currentModal, setCurrentModal] = useState(false);

  const showModal = (modal, snapPoint) => {
    setSnapPoint(snapPoint);
    setCurrentModal(modal);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  useEffect(() => {
    setModalActive(true);
  }, [currentModal]);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        snapPoint,
        closeModal,
        modalActive,
        currentModal,
        setModalActive,
      }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

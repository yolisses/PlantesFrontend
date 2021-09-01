import {createContext, useContext, useEffect, useState} from 'react';
import React from 'react';

const ModalContext = createContext();

export function ModalContextProvider({children}) {
  const [modalActive, setModalActive] = useState(false);
  const [currentModal, setCurrentModal] = useState(false);

  const showModal = modal => {
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
        modalActive,
        setModalActive,
        showModal,
        currentModal,
        closeModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

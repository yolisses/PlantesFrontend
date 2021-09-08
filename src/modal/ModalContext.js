import React from 'react';
import {createContext, useContext, useEffect, useState} from 'react';

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
        showModal,
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

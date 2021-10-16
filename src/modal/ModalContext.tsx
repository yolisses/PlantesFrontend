import React from 'react';
import {createContext, useContext, useEffect, useState} from 'react';

const ModalContext = createContext();

export function ModalContextProvider({children}) {
  const [modalActive, setModalActive] = useState(false);
  const [modalOptions, setModalOptions] = useState({});
  const [currentModal, setCurrentModal] = useState(false);

  const showModal = (modal, modalOptions = {}) => {
    setModalOptions(modalOptions);
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
        modalOptions,
        setModalActive,
      }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

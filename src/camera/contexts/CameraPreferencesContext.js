import React, {createContext, useContext, useState} from 'react';
import {RNCamera} from 'react-native-camera';

const CameraPreferencesContext = createContext();

export function CameraPreferencesProvider({children}) {
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.auto);

  return (
    <CameraPreferencesContext.Provider value={{type, flash, setType, setFlash}}>
      {children}
    </CameraPreferencesContext.Provider>
  );
}

export function useCameraPreferences() {
  return useContext(CameraPreferencesContext);
}

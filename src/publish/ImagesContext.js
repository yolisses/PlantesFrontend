import React, {createContext, useContext, useState} from 'react';
import {allPhotosAlbum} from './allPhotosAlbum';

const ImagesContext = createContext();

export function ImagesContextProvider({children}) {
  const [images, setImages] = useState({});
  const [album, setAlbum] = useState(allPhotosAlbum);
  const [refresh, setRefresh] = useState();
  return (
    <ImagesContext.Provider
      value={{images, setImages, album, setAlbum, refresh, setRefresh}}>
      {children}
    </ImagesContext.Provider>
  );
}

export function useImages() {
  return useContext(ImagesContext);
}

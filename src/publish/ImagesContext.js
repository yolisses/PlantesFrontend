import React, {createContext, useContext, useState} from 'react';
import {allPhotosAlbum} from './allPhotosAlbum';

const ImagesContext = createContext();

export function ImagesContextProvider({children}) {
  const [images, setImages] = useState({});
  const [album, setAlbum] = useState(allPhotosAlbum);
  const [refresh, setRefresh] = useState();

  function discard() {
    setImages({});
  }

  return (
    <ImagesContext.Provider
      value={{
        album,
        images,
        refresh,
        discard,
        setAlbum,
        setImages,
        setRefresh,
      }}>
      {children}
    </ImagesContext.Provider>
  );
}

export function useImages() {
  return useContext(ImagesContext);
}

import React, {createContext, useContext, useState} from 'react';

const PublishContext = createContext();

export function PublishContextProvider({children}) {
  const [images, setImages] = useState([]);

  function pushImage(image) {
    setImages(images.concat(image));
  }

  function removeImage(image) {
    setImages(images.filter(i => i !== image));
  }

  function discard() {
    setImages([]);
  }

  return (
    <PublishContext.Provider value={{images, pushImage, removeImage, discard}}>
      {children}
    </PublishContext.Provider>
  );
}

export function usePublish() {
  return useContext(PublishContext);
}

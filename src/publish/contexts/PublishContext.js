import React, {createContext, useContext, useState} from 'react';

const PublishContext = createContext();

export function PublishContextProvider({children}) {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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
    <PublishContext.Provider
      value={{
        name,
        images,
        discard,
        setName,
        pushImage,
        description,
        removeImage,
        setDescription,
      }}>
      {children}
    </PublishContext.Provider>
  );
}

export function usePublish() {
  return useContext(PublishContext);
}

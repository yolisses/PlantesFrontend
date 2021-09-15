import React, {createContext, useContext, useState} from 'react';

const PublishContext = createContext();

export function PublishContextProvider({children}) {
  const [tags, setTags] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');

  function pushTag(tag) {
    setTags(tags.concat(tag));
  }

  function removeTag(tag) {
    setTags(tags.filter(t => t !== tag));
  }

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
        tags,
        type,
        images,
        discard,
        pushTag,
        setName,
        setType,
        pushImage,
        removeTag,
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

import React, {createContext, useContext, useState} from 'react';

const PublishContext = createContext();

function useListState() {
  const [list, setList] = useState([]);

  function pushToList(item) {
    setList(list.concat(item));
  }

  function removeFromList(item) {
    setList(list.filter(i => i !== item));
  }

  function discard() {
    setList([]);
  }

  return [list, pushToList, removeFromList, discard];
}

export function PublishContextProvider({children}) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState('');

  const [tags, pushTag, removeTag, discardTags] = useListState();
  const [images, pushImage, removeImage, discardImages] = useListState();
  const [
    availabilities,
    pushAvailability,
    removeAvailability,
    discardAvailabilities,
  ] = useListState();

  function discard() {
    discardTags();
    discardImages();
    discardAvailabilities();
  }

  return (
    <PublishContext.Provider
      value={{
        name,
        tags,
        type,
        price,
        amount,
        images,
        discard,
        pushTag,
        setName,
        setType,
        setPrice,
        setAmount,
        pushImage,
        removeTag,
        description,
        removeImage,
        availabilities,
        setDescription,
        pushAvailability,
        removeAvailability,
      }}>
      {children}
    </PublishContext.Provider>
  );
}

export function usePublish() {
  return useContext(PublishContext);
}

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

function useObjectAsList() {
  const [obj, setObj] = useState([]);

  function push(item) {
    const copy = {...obj};
    copy[item] = true;
    setObj(copy);
  }

  function remove(item) {
    const copy = {...obj};
    delete copy[item];
    setObj(copy);
  }

  function getAsList() {
    return Object.keys(obj);
  }

  function indexOf(item) {
    if (!obj[item]) {
      return null;
    }
    return getAsList().indexOf(item);
  }

  function discard() {
    setObj({});
  }

  return {push, remove, discard, indexOf, getAsList};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export function PublishContextProvider({children}) {
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState('');

  const [tags, pushTag, removeTag, discardTags] = useListState();
  const [
    availabilities,
    pushAvailability,
    removeAvailability,
    discardAvailabilities,
  ] = useListState();

  const images = useObjectAsList();

  function discard() {
    discardTags();
    discardAvailabilities();
    images.discard();
  }

  return (
    <PublishContext.Provider
      value={{
        tags,
        price,
        amount,
        images,
        discard,
        pushTag,
        setPrice,
        setAmount,
        removeTag,
        description,
        availabilities,
        setDescription,
        pushAvailability,
        removeAvailability,

        reducer,
      }}>
      {children}
    </PublishContext.Provider>
  );
}

export function usePublish() {
  return useContext(PublishContext);
}

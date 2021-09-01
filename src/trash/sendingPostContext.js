import React, {useContext} from 'react';
import {createContext, useState} from 'react';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import path from 'path';
import {v4} from 'uuid';

const SendingPostContext = createContext({});

function getFileName({user, imageURI}) {
  const extension = path.extname(imageURI);
  const imageID = v4();
  return user.uid + '/' + imageID + extension;
}

export function SendingPostContextProvider({children}) {
  const [sendings, setSendings] = useState({});

  const publish = ({user, imageURI, name}) => {
    const fileName = getFileName({user, imageURI});
    const reference = storage().ref(fileName);
    let task = reference.putFile(imageURI);

    task.then(e => {
      removeSending(imageURI);
      const image = e.metadata.name;
      firestore()
        .collection('plants')
        .add({
          name,
          image,
          user: user.uid,
          createdAt: firestore.Timestamp.fromDate(new Date()),
        })
        .catch(err => {
          // console.error(err)
        });
    });

    task.catch(err => {
      // console.error(err)
    });

    const copy = {...sendings};
    copy[imageURI] = {task, imageURI};
    setSendings(copy);
  };

  const removeSending = key => {
    const copy = {...sendings};
    delete copy[key];
    setSendings(copy);
  };

  return (
    <SendingPostContext.Provider value={{sendings, publish}}>
      {children}
    </SendingPostContext.Provider>
  );
}

export function useSendingPostContext() {
  return useContext(SendingPostContext);
}

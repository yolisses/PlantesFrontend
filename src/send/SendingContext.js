import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import {useImages} from 'publish/ImagesContext';
import {useShallowData} from 'publish/ShallowDataContext';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Button} from 'react-native';
import {formatToPlant} from './formatToPlant';

const SendingContext = createContext();

const CREATE_PLANT = gql`
  mutation CreatePlant($plant: PlantInput) {
    createPlant(input: $plant) {
      id
      name
    }
  }
`;

export function SendingContextProvider({children}) {
  const [sending, setSending] = useState();
  const {discard: discardImagesSelection} = useImages();
  const {data: shallowData, discard: discardShallowData} = useShallowData();

  const [mutateFunction, {data, loading, error}] = useMutation(CREATE_PLANT);

  async function send() {
    const sending = formatToPlant(shallowData);
    setSending(sending);
    discardImagesSelection();
    discardShallowData();
  }

  function onPress() {
    console.error(sending);
    mutateFunction({
      variables: {plant: sending},
    });
  }

  useEffect(() => {
    console.error(data, loading, error);
  }, [data, loading, error]);

  return (
    <SendingContext.Provider value={{send, sending, setSending}}>
      {children}
      <Button title="refresh" onPress={onPress} />
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Button} from 'react-native';

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
  const [sendings, setSendings] = useState([]);

  const [mutateFunction, {data, loading, error}] = useMutation(CREATE_PLANT);

  async function pushSending(sending) {
    const copy = sendings.concat(sending);
    setSendings(copy);
  }

  function onPress() {
    console.error(sendings);
    mutateFunction({
      variables: {plant: sendings[0]},
    });
  }

  useEffect(() => {
    console.error(data, loading, error);
  }, [data, loading, error]);

  return (
    <SendingContext.Provider value={{pushSending, sendings}}>
      {children}
      <Button title="refresh" onPress={onPress} />
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

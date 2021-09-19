import React, {createContext, useContext, useEffect} from 'react';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import {v4} from 'uuid';

const SendingContext = createContext();

const CREATE_PLANT = gql`
  mutation CreatePlant($plant: PlantInput) {
    createPlant(input: $plant) {
      id
      name
    }
  }
`;

const sendings = {};

export function SendingContextProvider({children}) {
  const [mutateFunction, {data, loading, error}] = useMutation(CREATE_PLANT);

  async function pushSending(sending) {
    sendings[v4()] = sending;
    console.error(sendings);
    mutateFunction({
      variables: {plant: sending},
    });
  }

  useEffect(() => {
    console.error(data, loading, error);
  }, [data, loading, error]);

  return (
    <SendingContext.Provider value={{pushSending, sendings}}>
      {children}
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

import React, {createContext, useContext, useEffect} from 'react';
import gql from 'graphql-tag';
import {v4} from 'uuid';
import {Button} from 'react-native';
import {api} from 'api/api';
import {dispatchAllSendings} from './dispatchAllSendings';

const SendingContext = createContext();

const CREATE_PLANT = gql`
  mutation CreatePlant($plant: PlantInput) {
    createPlant(input: $plant) {
      id
      name
    }
  }
`;

const GET_PLANT_IMAGES_LINKS = gql`
  mutation GetImagesLinks($amount: INT) {
    getPlantImagesLinks(input: $plant)
  }
`;

const sendings = {};

export function SendingContextProvider({children}) {
  async function pushSending(plant) {
    sendings[v4()] = plant;
    const links = await getPlantImagesLinks();
    console.error(links);

    // mutateFunction({
    //   variables: {plant: sending},
    // });
  }

  // useEffect(() => {
  //   console.error(data, loading, error);
  // }, [data, loading, error]);

  async function getPlantImagesLinks() {
    try {
      const res = await api.post('/graphql', {
        query: `{
        getPlantImagesLinks(amount:10)
      }`,
      });
      return res.data.data.getPlantImagesLinks;
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    dispatchAllSendings();
  });

  return (
    <SendingContext.Provider value={{pushSending, sendings}}>
      {children}
      <Button title="teste" onPress={getPlantImagesLinks} />
    </SendingContext.Provider>
  );
}

export function useSending() {
  return useContext(SendingContext);
}

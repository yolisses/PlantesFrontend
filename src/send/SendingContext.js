import React, {createContext, useContext, useEffect} from 'react';
import gql from 'graphql-tag';
import {v4} from 'uuid';
import {Button} from 'react-native';
import {api} from 'api/api';
import {dispatchAllImages} from './dispatchSending';

const SendingContext = createContext();

const images1 = [
  {localUri: 'file://coisa1.jpg'},
  {localUri: 'file://coisa2.jpg'},
  {localUri: 'file://coisa3.jpg'},
];
const images2 = [
  {localUri: 'file://coisa4.jpg'},
  {localUri: 'file://coisa5.jpg'},
  {localUri: 'file://coisa6.jpg'},
];
const images3 = [
  {localUri: 'file://coisa7.jpg'},
  {localUri: 'file://coisa8.jpg'},
  {localUri: 'file://coisa9.jpg'},
];

const testSendings = [images1, images2, images3];

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

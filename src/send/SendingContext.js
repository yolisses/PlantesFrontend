import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import {useImages} from 'publish/ImagesContext';
import {useShallowData} from 'publish/ShallowDataContext';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Button} from 'react-native';

const SendingContext = createContext();

const CREATE_PLANT = gql`
  mutation Counter($plant: PlantInput) {
    createPlant(input: $plant) {
      id
      name
      type
    }
  }
`;

// `{
//   name: "Testando com valor padrão"
//   images: [
//     "https://plantei.s3.sa-east-1.amazonaws.com/items/original/9559add5b17f7f18d21c0dad3b8723dd.jpg"
//   ]
//   type: "bulb"
//   swap: true
//   sell: true
//   donate: true
//   price: 10.50
//   description: "Vamo que vamo"
//   tags: ["frutífera", "ornamental", "medicinal", "de sombra"]
//   amount: 12
// }
// ) {
// id
// name
// card
// images
// }`

export function SendingContextProvider({children}) {
  const [sending, setSending] = useState();
  const {discard: discardImagesSelection} = useImages();
  const {data: shallowData, discard: discardShallowData} = useShallowData();

  const [mutateFunction, {data, loading, error}] = useMutation(CREATE_PLANT);

  async function send() {
    console.error('send');
    const copy = {...shallowData};
    discardImagesSelection();
    discardShallowData();
    setSending(copy);
  }

  function onPress() {
    mutateFunction({
      variables: {
        plant: {
          name: 'vamosquevamos',
          images: [
            'https://plantei.s3.sa-east-1.amazonaws.com/items/card/1.webp',
          ],
          type: 'bulb',
        },
      },
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

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PublishImagesScreen} from './PublishImagesScreen';
import {PublishDetailScreen} from './PublishDetailScreen';
import {PublishPriceScreen} from './PublishPriceScreen';
import {Form} from 'react-final-form';

const Publish = createNativeStackNavigator();

export function PublishScreen() {
  return (
    <Form
      onSubmit={() => console.error('coisa')}
      validate={values => {
        const errors = {};
        if (!(values.name && values.name.trim())) {
          errors.name = 'Por favor, escreva o nome da planta';
        }
        return errors;
      }}
      render={() => (
        <>
          <Publish.Navigator>
            <Publish.Screen
              name="Images"
              component={PublishImagesScreen}
              options={{headerShown: false}}
            />
            <Publish.Screen
              name="Detail"
              component={PublishDetailScreen}
              options={{headerShown: false}}
            />
            <Publish.Screen
              name="Price"
              component={PublishPriceScreen}
              options={{headerShown: false}}
            />
          </Publish.Navigator>
        </>
      )}
    />
  );
}

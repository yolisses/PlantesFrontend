import {loadPlants} from 'home/loadPlants';
import React from 'react';
import {Text} from 'react-native';

export function LoadPlantsDebugger() {
  return (
    <Text>
      {JSON.stringify({
        loading: loadPlants.loading,
        page: loadPlants.page,
        ended: loadPlants.ended,
        networkError: loadPlants.networkError,
      })}
    </Text>
  );
}

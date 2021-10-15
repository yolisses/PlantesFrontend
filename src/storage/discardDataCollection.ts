import AsyncStorage from '@react-native-async-storage/async-storage';

export function discardDataCollection(dataCollection) {
  if (dataCollection.key !== undefined) {
    AsyncStorage.removeItem(dataCollection.key);
  } else {
    Object.keys(dataCollection).map(key =>
      discardDataCollection(dataCollection[key]),
    );
  }
}

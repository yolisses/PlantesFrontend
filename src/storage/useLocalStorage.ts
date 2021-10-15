import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {transformBoolean} from './transforms/transformBoolean';
import {transformNumber} from './transforms/transformNumber';
import {transformObject} from './transforms/transformObject';
import {transformString} from './transforms/transformString';

export function useLocalStorage(dataItem) {
  const {key, type, initialValue} = dataItem;
  const [value, setValue] = useState(initialValue || null);

  const transform = getTransform(type);

  const set = newValue => {
    if (newValue === value) {
      return;
    }
    setValue(newValue);
    const localValue = transform.toLocal(newValue);
    AsyncStorage.setItem(key, localValue).catch(err =>
      console.error('Set local storage error:', err),
    );
  };

  const initialize = () => {
    AsyncStorage.getItem(key)
      .then(value => {
        if (!value && initialValue) {
          set(initialValue);
        } else {
          setValue(transform.toData(value));
        }
      })
      .catch(err => console.error('Initialize local storage error:', err));
  };

  useEffect(initialize, []);

  return [value, set];
}

export function getTransform(type) {
  const transforms = {
    boolean: transformBoolean,
    number: transformNumber,
    object: transformObject,
    string: transformString,
  };

  if (!transforms[type]) {
    throw 'Type to use local storage not found: ' + type;
  }

  return transforms[type];
}

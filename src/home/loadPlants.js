import {observable} from 'mobx';

export const loadPlants = observable({
  page: 0,
  plants: [],
  ended: false,
  loading: false,
});

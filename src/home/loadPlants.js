import {observable} from 'mobx';

export const loadPlants = observable({
  page: 0,
  plants: [],
  reset: true,
  ended: false,
  loading: false,
});

export function reset() {
  loadPlants.page = 0;
  loadPlants.plants = [];
  loadPlants.ended = false;
  loadPlants.loading = false;

  loadPlants.reset = true;
}

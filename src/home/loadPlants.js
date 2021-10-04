import {observable} from 'mobx';

export const loadPlants = observable({
  page: 0,
  plants: [],
  ended: false,
  refresh: true,
  loading: false,
});

export function refreshPlants() {
  loadPlants.page = 0;
  loadPlants.plants = [];
  loadPlants.ended = false;
  loadPlants.loading = false;

  loadPlants.refresh = true;
}

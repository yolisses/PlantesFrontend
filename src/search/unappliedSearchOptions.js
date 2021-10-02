import {observable} from 'mobx';
import {searchOptions} from './searchOptions';

export const unappliedSearchOptions = observable({
  availabilities: {},
  tags: {},
});

export function reset() {
  unappliedSearchOptions.availabilities = {};
  unappliedSearchOptions.tags = {};
}

export function reHydrate() {
  unappliedSearchOptions.availabilities = {...searchOptions.availabilities};
  unappliedSearchOptions.tags = {...searchOptions.tags};
}

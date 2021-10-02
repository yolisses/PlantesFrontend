import {observable} from 'mobx';

export const unappliedSearchOptions = observable({
  availabilities: {},
  tags: {},
});

export function reset() {
  unappliedSearchOptions.availabilities = {};
  unappliedSearchOptions.tags = {};
}

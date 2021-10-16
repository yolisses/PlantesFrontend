import {auth} from 'auth/auth';

export function formatSearch(searchOptions) {
  const result = {};
  const {tags, availabilities, text} = searchOptions;

  if (text) {
    result.text = text;
  }
  if (availabilities) {
    result.donate = availabilities.donate;
    result.sell = availabilities.sell;
    result.swap = availabilities.swap;
  }

  result.coordinates = auth.user.location.coordinates;

  if (tags) {
    result.tags = Object.entries(tags)
      .filter(entry => entry[1])
      .map(entry => entry[0]);
  }
  return result;
}

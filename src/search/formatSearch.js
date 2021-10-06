export function formatSearch(data) {
  const result = {};
  const {tags, availabilities, text} = data;

  if (text) {
    result.text = text;
  }
  if (availabilities) {
    result.donate = availabilities.donate;
    result.sell = availabilities.sell;
    result.swap = availabilities.swap;
  }

  if (tags) {
    result.tags = Object.entries(tags)
      .filter(entry => entry[1])
      .map(entry => entry[0]);
  }
  return result;
}

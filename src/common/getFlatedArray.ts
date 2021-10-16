export function getFlatedArray(data) {
  return data?.pages ? data.pages.flatMap(page => [...page.content]) : [];
}

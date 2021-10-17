import {getObjectLength} from 'utils/getObjectLength';

export function pushImageInObject(
  old: ImagesObj,
  uri: string,
  limit?: number,
  limitCallback?: () => void,
): ImagesObj {
  let counter = getObjectLength(old) + 1;
  if (limit && limitCallback && counter > limit) {
    limitCallback();
    return old;
  }
  const newValue = {...old};
  newValue[uri] = {
    sent: false,
    localUri: uri,
    index: counter,
  };
  return newValue;
}

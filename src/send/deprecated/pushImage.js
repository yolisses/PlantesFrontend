import {brokenSendLink} from './brokenSendLink';

export async function pushImage(image) {
  const file = {
    uri: image.localImage,
  };
  // console.error('sending: ', image.localImage);
  const data = await fetch(image.sendLink, {
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: file,
  });
  if (data.status === 403) {
    throw brokenSendLink;
  } else if (data.status === 200) {
    image.sent = true;
  } else {
    throw 'Unknown error: ' + JSON.stringify(data);
  }
}

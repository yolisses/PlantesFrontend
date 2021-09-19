export async function sendImage(image) {
  const file = {
    uri: image.localUri,
  };

  console.error('sending: ', JSON.stringify(image));
  await fetch(image.sendLink, {
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: file,
  })
    .then(data => console.error(data))
    .catch(err => console.error(err));

  image.sent = true;
}

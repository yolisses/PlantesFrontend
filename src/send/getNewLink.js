const getLinkError = 'getLinkError';

export async function getNewLink(image) {
  //image just for debug
  if (Math.random() > 0.7) {
    const link = 'xyz' + Math.random();
    console.error('link obtained for: ', image.localUri);
    return link;
  } else {
    console.error('error on get link: ', image.localUri);
    throw getLinkError;
  }
}

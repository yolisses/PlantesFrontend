export function getUri(image: Image) {
  return image.localUri || image.remoteUri;
}

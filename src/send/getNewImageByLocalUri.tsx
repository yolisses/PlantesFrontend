import ImageResizer from 'react-native-image-resizer';

export async function getNewImageByLocalUri(localUri: string): Promise<Image> {
  const res = await ImageResizer.createResizedImage(
    localUri,
    1080,
    1080,
    'WEBP',
    100,
    0,
    undefined,
    true,
    {
      mode: 'contain',
      onlyScaleDown: true,
    },
  );
  return {
    localUri: res.uri,
    sent: false,
  };
}

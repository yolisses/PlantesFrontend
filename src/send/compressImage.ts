import ImageResizer from 'react-native-image-resizer';

export async function compressImage(imageUri: string): Promise<string> {
  const res = await ImageResizer.createResizedImage(
    imageUri,
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
  return res.uri;
}

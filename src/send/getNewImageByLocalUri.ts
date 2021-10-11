import ImageResizer from 'react-native-image-resizer';

export async function getNewImageByLocalUri(localUri: string): Promise<Image> {
  try {
    const res = await ImageResizer.createResizedImage(
      localUri,
      800,
      800,
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
    console.error(res);
  } catch (err) {
    console.error(err);
  }

  return {
    localUri,
    sent: false,
  };
}

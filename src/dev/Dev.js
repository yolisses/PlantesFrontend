import React from 'react';
import {Text, View} from 'react-native';

import {
  DocumentDirectoryPath,
  writeFile,
  readDir,
  CachesDirectoryPath,
  ExternalStorageDirectoryPath,
} from 'react-native-fs';

export function Dev() {
  const path = ExternalStorageDirectoryPath + '/Plantei/test.txt';

  writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
    .then(success => {
      console.error('FILE WRITTEN!');
    })
    .catch(err => {
      console.error(err.message);
    });

  readDir(ExternalStorageDirectoryPath).then(res =>
    console.error(res.map(file => file.path)),
  );

  return (
    <View>
      <Text>oi</Text>
    </View>
  );
}

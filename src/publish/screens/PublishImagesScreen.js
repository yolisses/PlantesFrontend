import React from 'react';
import {Image, ScrollView} from 'react-native';

export function PublishImagesScreen() {
  return (
    <ScrollView horizontal={true}>
      <ScrollView nestedScrollEnabled>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1630692158486-f1e2dd74142b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          }}
          style={{width: 1000, aspectRatio: 1}}
        />
      </ScrollView>
    </ScrollView>
  );
}

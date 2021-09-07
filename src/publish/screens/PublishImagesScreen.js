import React from 'react';
import {ImageCropper} from '../ImageCropper';
import {LocalImagesSelector} from './LocalImagesSelector';
import {SectionList, Text, View} from 'react-native';
import {G} from 'react-native-svg';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export function PublishImagesScreen() {
  const layout = [
    {id: 0, data: []},
    {id: 1, data: ['vai']},
  ];
  return (
    <GestureHandlerRootView>
      <View style={{height: '100%'}}>
        <SectionList
          sections={layout}
          stickyHeaderIndices={[1]}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section: {id}}) =>
            id === 0 ? (
              <ImageCropper />
            ) : (
              <View style={{backgroundColor: 'white'}}>
                <Text style={{fontSize: 20}}>galeria</Text>
              </View>
            )
          }
          renderItem={() => <LocalImagesSelector />}
        />
      </View>
    </GestureHandlerRootView>
  );
}

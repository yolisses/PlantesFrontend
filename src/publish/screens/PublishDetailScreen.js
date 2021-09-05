import React from 'react';
import {ScrollView} from 'react-native';
import {TagsSelector} from 'form/TagsSelector';
import {TextInputSaved} from 'form/TextInputSaved';
import {SingleOptionSelector} from 'form/SingleOptionSelector';
import {PublishScreenLayout} from './PublishScreenLayout';
import {publishData} from 'publish/publishData';

export function PublishDetailScreen() {
  const {name, options, description, type} = publishData;

  return (
    <PublishScreenLayout ratio={2 / 3} nextRoute="PublishPrice">
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
        <TextInputSaved dataItem={name} autoFocus />
        <SingleOptionSelector dataItem={type} />
        <TagsSelector label="Marcar como" options={options} />
        <TextInputSaved
          dataItem={description}
          style={{paddingBottom: 35}}
          optional
          multiline
        />
      </ScrollView>
    </PublishScreenLayout>
  );
}

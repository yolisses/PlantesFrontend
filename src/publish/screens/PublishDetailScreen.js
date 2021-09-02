import React from 'react';
import {ScrollView} from 'react-native';
import {TagsSelector} from 'form/TagsSelector';
import {TextInputSaved} from 'form/TextInputSaved';
import {publishData} from 'publish/publishData';
import {PublishScreenLayout} from './PublishScreenLayout';
import {SingleOptionSelector} from '../../form/SingleOptionSelector';

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

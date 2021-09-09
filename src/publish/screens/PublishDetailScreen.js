import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TagsSelector} from 'form/TagsSelector';
import {TextInputSaved} from 'form/TextInputSaved';
import {SingleOptionSelector} from 'form/SingleOptionSelector';
import {PublishScreenLayout} from './PublishScreenLayout';
import {publishData} from 'publish/publishData';
import {NextButton} from 'publish/NextButton';

export function PublishDetailScreen() {
  const {name, options, description, type} = publishData;

  return (
    <PublishScreenLayout
      ratio={2 / 3}
      nextRoute="PublishPrice"
      headerRight={<NextButton route="Price" />}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInputSaved autoFocus dataItem={name} />
        <SingleOptionSelector dataItem={type} />
        <TagsSelector label="Marcar como" options={options} />
        <TextInputSaved
          optional
          multiline
          dataItem={description}
          style={{paddingBottom: 35}}
        />
      </ScrollView>
    </PublishScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 20,
    marginBottom: 10,
  },
});

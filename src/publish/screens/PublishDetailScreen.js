import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {TextInput} from 'form/TextInput';
import {TagsSelector} from 'form/TagsSelector';
import {SingleOptionSelector} from 'form/SingleOptionSelector';

import {tags} from 'publish/data/tags';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {plantTypes} from 'publish/data/plantTypes';
import {usePublish} from 'publish/contexts/PublishContext';

function ValidatedHeader() {
  return (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={<NextButton route="Price" />}
    />
  );
}

export function PublishDetailScreen() {
  const {name, setName} = usePublish();
  const {description, setDescription} = usePublish();

  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={2 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInput autoFocus label="Nome" value={name} setValue={setName} />
        <SingleOptionSelector label="Marcar como" options={plantTypes} />
        <TagsSelector options={tags} label="Marcar como" />
        <TextInput
          optional
          multiline
          label="Descrição"
          value={description}
          setValue={setDescription}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 0,
  },
});

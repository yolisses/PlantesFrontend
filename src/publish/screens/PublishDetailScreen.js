import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {TextInput} from 'form/TextInput';
import {TagsSelector} from 'form/TagsSelector';
import {SingleOptionSelector} from 'form/SingleOptionSelector';

import {tags} from 'publish/data/tags';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {plantTypes} from 'publish/data/plantTypes';

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
  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={2 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInput autoFocus label="Nome" />
        <SingleOptionSelector label="Marcar como" options={plantTypes} />
        <TagsSelector options={tags} label="Marcar como" />
        <TextInput optional multiline label="Descrição" />
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

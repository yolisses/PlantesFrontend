import React, {useMemo} from 'react';
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
import {usePublish} from 'publish/PublishContext';

function ValidatedHeader({name, type}) {
  const canContinue = !!name && !!name?.trim() && !!type;
  return useMemo(
    () => (
      <CustomHeader
        title="Publicar"
        left={<BackButton />}
        right={canContinue && <NextButton route="Price" />}
      />
    ),
    [name, type],
  );
}

export function PublishDetailScreen() {
  const {state, dispatch} = usePublish();

  return (
    <>
      <ValidatedHeader name={state.name} type={state.type} />
      <ProgressBar ratio={2 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInput
          id="name"
          label="Nome"
          autoFocus
          value={state.name}
          dispatch={dispatch}
        />
        <SingleOptionSelector
          id="type"
          label="Marcar como"
          value={state.type}
          dispatch={dispatch}
          options={plantTypes}
        />
        <TagsSelector
          id="tags"
          label="Marcar como"
          options={tags}
          value={state.tags}
          dispatch={dispatch}
        />
        <TextInput
          id="description"
          label="Descrição"
          optional
          multiline
          dispatch={dispatch}
          value={state.description}
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

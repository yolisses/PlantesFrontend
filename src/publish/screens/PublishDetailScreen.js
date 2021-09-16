import React, {useMemo, useReducer} from 'react';
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
import {reducer} from 'publish/reducer';

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
  const [state, dispatch] = useReducer(reducer, {name: 'macarrão', tags: []});

  return (
    <>
      <ValidatedHeader name={state.name} type={state.type} />
      <ProgressBar ratio={2 / 3} />
      <Text>{JSON.stringify(state)}</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInput
          autoFocus
          label="Nome"
          id="name"
          value={state.name}
          dispatch={dispatch}
        />
        <SingleOptionSelector
          label="Marcar como"
          id="type"
          value={state.type}
          options={plantTypes}
          dispatch={dispatch}
        />
        <TagsSelector
          label="Marcar como"
          id="tags"
          options={tags}
          dispatch={dispatch}
          value={state.tags}
        />
        <Text>{'' + JSON.stringify(state.tags)}</Text>
        <TextInput
          label="Descrição"
          id="description"
          optional
          multiline
          value={state.description}
          dispatch={dispatch}
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

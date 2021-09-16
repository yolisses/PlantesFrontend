import React, {useMemo, useReducer} from 'react';
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
import {usePublish} from 'publish/contexts/PublishContext';
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
  const {name, setName} = usePublish();
  const {type, setType} = usePublish();
  const {description, setDescription} = usePublish();
  const {tags: selectedTags, pushTag, removeTag} = usePublish();

  const [state, dispatch] = useReducer(reducer, {name: 'macarrão'});

  return (
    <>
      <ValidatedHeader name={name} type={state.type} />
      <ProgressBar ratio={2 / 3} />
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
          setValue={setType}
          options={plantTypes}
          dispatch={dispatch}
        />
        <TagsSelector
          label="Marcar como"
          options={tags}
          pushTag={pushTag}
          removeTag={removeTag}
          selectedTags={selectedTags}
        />
        <TextInput
          label="Descrição"
          optional
          multiline
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

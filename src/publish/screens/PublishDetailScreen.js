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
import {usePublish} from 'publish/contexts/PublishContext';

function ValidatedHeader() {
  const {name, type} = usePublish();
  const canContinue = !!name && !!name?.trim() && !!type;
  return (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={canContinue && <NextButton route="Price" />}
    />
  );
}

export function PublishDetailScreen() {
  const {name, setName} = usePublish();
  const {type, setType} = usePublish();
  const {description, setDescription} = usePublish();
  const {tags: selectedTags, pushTag, removeTag} = usePublish();

  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={2 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInput autoFocus label="Nome" value={name} setValue={setName} />
        <SingleOptionSelector
          label="Marcar como"
          value={type}
          setValue={setType}
          options={plantTypes}
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

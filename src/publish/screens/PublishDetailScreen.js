import React from 'react';
import {Field, useField} from 'react-final-form';
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
  const {meta: name} = useField('name');
  const {meta: type} = useField('type');

  return (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={!name.invalid && !type.invalid && <NextButton route="Price" />}
    />
  );
}

export function PublishDetailScreen() {
  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={2 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Field name="name">
          {({input, meta}) => {
            return (
              <TextInput
                autoFocus
                {...input}
                label="Nome"
                error={meta.error}
                active={meta.active}
              />
            );
          }}
        </Field>
        <Field
          name="type"
          render={({input}) => (
            <SingleOptionSelector
              {...input}
              label="Marcar como"
              options={plantTypes}
            />
          )}
        />
        <Field
          name="tags"
          render={({input}) => (
            <TagsSelector {...input} options={tags} label="Marcar como" />
          )}
        />
        <Field name="description">
          {({input, meta}) => {
            return (
              <TextInput
                optional
                multiline
                {...input}
                label="Descrição"
                error={meta.error}
                active={meta.active}
              />
            );
          }}
        </Field>
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

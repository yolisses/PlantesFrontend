import React from 'react';
import {Field, useField} from 'react-final-form';
import {ScrollView, StyleSheet} from 'react-native';

import {TextInput} from 'form/TextInput';
import {TagsSelector} from 'form/TagsSelector';
import {SingleOptionSelector} from 'form/SingleOptionSelector';

import {tags} from 'publish/data/tags';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {publishData} from 'publish/publishData';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {plantTypes} from 'publish/data/plantTypes';

function ValidatedHeader() {
  const {meta: name} = useField('name');

  return (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={!name.invalid && <NextButton route="Price" />}
    />
  );
}

export function PublishDetailScreen() {
  const {type} = publishData;

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
                label="Nome"
                input={input}
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
              dataItem={type}
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

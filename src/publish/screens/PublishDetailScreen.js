import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {TextInput} from 'form/TextInput';
import {TagsSelector} from 'form/TagsSelector';
import {SingleOptionSelector} from 'form/SingleOptionSelector';

import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {publishData} from 'publish/publishData';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';

import {Field, Form, useField} from 'react-final-form';

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
  const {name, options, description, type} = publishData;

  return (
    <Form
      onSubmit={() => console.error('coisa')}
      validate={values => {
        const errors = {};
        if (!(values.name && values.name.trim())) {
          errors.name = 'Por favor, escreva o nome da planta';
        }
        return errors;
      }}
      subscription="name">
      {() => (
        <>
          <ValidatedHeader />
          <ProgressBar ratio={2 / 3} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <Field name="name">
              {({input, meta}) => {
                return (
                  <TextInput
                    autoFocus
                    label="Nome"
                    input={input}
                    dataItem={name}
                    error={meta.error}
                    active={meta.active}
                  />
                );
              }}
            </Field>
            <SingleOptionSelector dataItem={type} />
            <TagsSelector label="Marcar como" options={options} />
            <TextInput
              optional
              multiline
              label="Descrição"
              dataItem={description}
            />
          </ScrollView>
        </>
      )}
    </Form>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 0,
  },
});

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TagsSelector} from 'form/TagsSelector';
import {SingleOptionSelector} from 'form/SingleOptionSelector';
import {PublishScreenLayout} from './PublishScreenLayout';
import {publishData} from 'publish/publishData';
import {NextButton} from 'publish/NextButton';
import {TextInput} from 'form/TextInput';
import {Field, Form} from 'react-final-form';

export function PublishDetailScreen() {
  const {name, options, description, type} = publishData;

  return (
    <PublishScreenLayout
      ratio={2 / 3}
      nextRoute="PublishPrice"
      headerRight={<NextButton route="Price" />}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Form
          onSubmit={() => console.error('coisa')}
          validate={values => {
            const errors = {};
            if (!(values.name && values.name.trim())) {
              errors.name = 'Por favor, escreva o nome da planta';
            }
            return errors;
          }}
          render={({handleSubmit}) => (
            <>
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
                style={{paddingBottom: 35}}
              />
            </>
          )}
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

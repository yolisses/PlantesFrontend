import React, {useMemo, useReducer, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {TextInput} from 'form/TextInput';
import {TagsSelector} from 'form/TagsSelector';
import {SingleOptionSelector} from 'form/SingleOptionSelector';

import {tags} from 'publish/data/tags';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {plantTypes} from 'publish/data/plantTypes';
import {useShallowData} from 'publish/ShallowDataContext';

function ValidatedHeader({hasName, hasType}) {
  const canContinue = hasName && hasType;
  return (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={canContinue && <NextButton route="Price" />}
    />
  );
}

export function PublishDetailScreen() {
  const {data} = useShallowData();
  const [hasName, setHasName] = useState();
  const [hasType, setHasType] = useState();

  function validateName(value) {
    if (value === null || value === undefined || value === '') {
      setHasName(false);
    } else {
      setHasName(true);
    }
  }

  function validateType(value) {
    if (value === null || value === undefined || value === '') {
      setHasType(false);
    } else {
      setHasType(true);
    }
  }

  return (
    <>
      <ValidatedHeader hasName={hasName} hasType={hasType} />
      <ProgressBar ratio={2 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInput
          id="name"
          data={data}
          label="Nome"
          onChangeValue={validateName}
          autoFocus
        />
        <SingleOptionSelector
          id="type"
          data={data}
          label="Marcar como"
          options={plantTypes}
          onChangeValue={validateType}
        />
        <TagsSelector
          id="tags"
          data={data}
          label="Marcar como"
          options={tags}
        />
        <TextInput
          id="description"
          data={data}
          label="Descrição"
          optional
          multiline
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

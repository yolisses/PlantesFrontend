import React, {useMemo, useReducer, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {TextInput} from 'form/TextInput';
import {TagsSelector} from 'form/TagsSelector';

import {tags} from 'publish/data/tags';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {useShallowData} from 'publish/ShallowDataContext';

function ValidatedHeader({hasName}) {
  const canContinue = hasName;
  return useMemo(
    () => (
      <CustomHeader
        title="Publicar"
        left={<BackButton />}
        right={canContinue && <NextButton route="Price" />}
      />
    ),
    [canContinue],
  );
}

export function PublishDetailScreen() {
  const {data} = useShallowData();
  const [hasName, setHasName] = useState(!!data.name);

  function validateName(value) {
    setHasName(!!value);
  }

  return (
    <>
      <ValidatedHeader hasName={hasName} />
      <ProgressBar ratio={2 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInput
          id="name"
          data={data}
          label="Nome"
          onChangeValue={validateName}
          autoFocus
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
    backgroundColor: 'white',
  },
});

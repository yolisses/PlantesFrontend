import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {useObserver} from 'mobx-react-lite';

import {TextInput} from 'form/TextInput';
import {TagsSelector} from 'form/TagsSelector';

import {tags} from 'publish/data/tags';
import {BackButton} from 'publish/BackButton';
import {NextButton} from 'publish/NextButton';
import {ProgressBar} from 'publish/ProgressBar';
import {CustomHeader} from 'publish/CustomHeader';
import {publishData} from 'publish/publishData';

function ValidatedHeader() {
  return useObserver(() => (
    <CustomHeader
      title="Publicar"
      left={<BackButton />}
      right={!!publishData.name && <NextButton route="Price" />}
    />
  ));
}

export function PublishDetailScreen() {
  return (
    <>
      <ValidatedHeader />
      <ProgressBar ratio={2 / 3} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TextInput id="name" label="Nome" data={publishData} autoFocus />
        <TagsSelector
          id="tags"
          options={tags}
          data={publishData}
          label="Marcar como"
        />
        <TextInput
          optional
          multiline
          id="description"
          label="Descrição"
          data={publishData}
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

import {IntInput} from 'form/IntInput';
import {PriceInput} from 'form/PriceInput';
import {TagsSelector} from 'form/TagsSelector';
import {TextInput} from 'form/TextInput';
import {useObserver} from 'mobx-react-lite';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomHeader} from './CustomHeader';
import {availabilities, availabilitiesLabels} from './data/availiabilities';
import {tags} from './data/tags';
import {FinishButton} from './FinishButton';
import {publishData} from './publishData';
import {SelectImagesField} from './SelectImagesField';

export function PublishScreen() {
  if (!publishData.errors) {
    publishData.errors = {};
  }

  function validateName({setError, id, data, text}) {
    if (!text || text.length < 3) {
      data.errors[id] = true;
      setError('O nome precisa de no mínimo 3 letras');
    } else {
      setError();
      data.errors[id] = false;
    }
  }

  return useObserver(() => (
    <FooterNavigationLayout selected="Publish">
      <CustomHeader
        // left={<DiscardButton />}
        title="Publicar"
        right={<FinishButton />}
      />
      <ScrollView style={styles.container}>
        <SelectImagesField />
        <TextInput
          id="name"
          label="Nome"
          maxLength={32}
          textValidate={validateName}
          data={publishData}
        />
        <TagsSelector
          showIcon={false}
          data={publishData}
          id="availabilities"
          label="Disponível para"
          options={availabilities}
          buttonStyle={styles.button}
          labels={availabilitiesLabels}
        />
        {publishData.availabilities?.sell && (
          <PriceInput id="price" data={publishData} label="Preço" />
        )}
        <TagsSelector
          id="tags"
          data={publishData}
          label="Marcar como"
          options={tags}
        />
        <TextInput
          id="description"
          data={publishData}
          label="Descrição"
          optional
          multiline
        />
        <IntInput id="amount" data={publishData} label="Quantidade" optional />
      </ScrollView>
    </FooterNavigationLayout>
  ));
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: 'center',
  },
});

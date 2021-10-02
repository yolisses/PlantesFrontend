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
import {publishData} from './publishData';
import {SelectImagesField} from './SelectImagesField';

export function PublishScreen() {
  return useObserver(() => (
    <FooterNavigationLayout selected="Publish">
      <CustomHeader title="Publicar" />
      <ScrollView style={styles.container}>
        <SelectImagesField />
        <TextInput id="name" data={publishData} label="Nome" />
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

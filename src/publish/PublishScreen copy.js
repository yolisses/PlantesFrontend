import {IntInput} from 'form/IntInput';
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
import {SelectImagesField} from './SelectImagesField';

export function PublishScreen() {
  return useObserver(() => (
    <FooterNavigationLayout selected="Publish">
      <CustomHeader title="Publicar" right={<FinishButton />} />
      <ScrollView style={styles.container}>
        {/* <SelectImagesField /> */}
        <TextInput id="name" label="Nome" maxLength={32} />
        {/* <TagsSelector
          showIcon={false}
          id="availabilities"
          label="Disponível para"
          options={availabilities}
          buttonStyle={styles.button}
          labels={availabilitiesLabels}
        />
        <TagsSelector id="tags" label="Marcar como" options={tags} />
        <TextInput id="description" label="Descrição" optional multiline /> */}
        {/* <IntInput id="amount" label="Quantidade" optional /> */}
        {/* publishData.availabilities?.sell && (
          <PriceInput id="price" data={publishData} label="Preço" />
        ) */}
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

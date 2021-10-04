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
  return useObserver(() => (
    <FooterNavigationLayout selected="Publish">
      <CustomHeader title="Publicar" right={<FinishButton />} />
      <ScrollView style={styles.container}>
        <SelectImagesField />
        <TextInput id="name" label="Nome" maxLength={32} data={publishData} />
        <TagsSelector
          showIcon={false}
          label="Disponível para"
          options={availabilities}
          buttonStyle={styles.button}
          labels={availabilitiesLabels}
        />
        <PriceInput label="Preço" />
        <TagsSelector label="Marcar como" options={tags} />
        <TextInput label="Descrição" optional multiline />
        <IntInput label="Quantidade" optional />
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

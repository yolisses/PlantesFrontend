import {IntInput} from 'form/IntInput';
import {PriceInput} from 'form/PriceInput';
import {TagsSelector} from 'form/TagsSelector';
import {TextInput} from 'form/TextInput';
import {useObserver} from 'mobx-react-lite';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomHeader} from './CustomHeader';
import {availabilities, availabilitiesLabels} from './data/availiabilities';
import {tags} from './data/tags';
import {FinishButton} from './FinishButton';
import {publishData} from './publishData';
import {SelectImagesField} from './SelectImagesField';

export function PublishScreen() {
  const errorsObj = {};
  const [forceValidate, setForceValidate] = useState();

  function checkItsValid() {
    setForceValidate(Math.random());
    for (let key in errorsObj) {
      if (errorsObj[key]) {
        return false;
      }
    }
    return true;
  }

  const validateText = text => {
    if (!text) {
      return 'por favor informe o nome';
    }
    if (text.trim().length < 3) {
      return 'precisa ter pelo menos tres letras';
    }
  };

  return useObserver(() => (
    <FooterNavigationLayout selected="Publish">
      <CustomHeader
        // left={<DiscardButton />}
        title="Publicar"
        right={<FinishButton checkItsValid={checkItsValid} />}
      />
      <ScrollView style={styles.container}>
        <SelectImagesField />
        <TextInput
          id="name"
          forceValidate={forceValidate}
          errorsObj={errorsObj}
          label="Nome"
          maxLength={32}
          validate={validateText}
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

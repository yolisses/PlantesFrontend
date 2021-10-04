import {IntInput} from 'form/IntInput';
import {PriceInput} from 'form/PriceInput';
import {TagsSelector} from 'form/TagsSelector';
import {TextInput} from 'form/TextInput';
import {useObserver} from 'mobx-react-lite';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomHeader} from './CustomHeader';
import {availabilities, availabilitiesLabels} from './data/availiabilities';
import {tags} from './data/tags';
import {FinishButton} from './FinishButton';
import {SelectImagesField} from './SelectImagesField';

export function PublishScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  function onSubmit(coisa) {
    console.error('oi');
    console.error(coisa);
  }

  return useObserver(() => (
    <FooterNavigationLayout selected="Publish">
      <CustomHeader
        title="Publicar"
        right={<FinishButton onPress={handleSubmit(onSubmit)} />}
      />
      <ScrollView style={styles.container}>
        {/* <SelectImagesField /> */}

        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Esse campo é obrigatório'},
            minLength: {
              value: 3,
              message: 'Por favor, nome com pelo menos 3 letras',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Nome"
              value={value}
              maxLength={32}
              onBlur={onBlur}
              error={errors.name?.message}
              style={styles.input}
              onChangeText={onChange}
            />
          )}
          name="name"
          defaultValue=""
        />
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

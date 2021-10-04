import {useNavigation} from '@react-navigation/core';
import {EmphasisButton} from 'common/EmphasisButton';
import {IntInput} from 'form/IntInput';
import {PriceInput} from 'form/PriceInput';
import {TagsSelector} from 'form/TagsSelector';
import {TextInput} from 'form/TextInput';
import {useObserver} from 'mobx-react-lite';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSending} from 'send/SendingContext';
import {CustomHeader} from './CustomHeader';
import {availabilities, availabilitiesLabels} from './data/availiabilities';
import {tags} from './data/tags';
import {NextButton} from './NextButton';
import {SelectImagesField} from './SelectImagesField';

export function PublishScreen() {
  const {
    reset,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {navigate} = useNavigation();

  const {pushSending} = useSending();

  function onSubmit(item) {
    console.error('foi', item);
    pushSending(item);
    // navigate('Home');
    reset();
  }

  function validateAvailabilities(obj) {
    for (let key in obj) {
      if (obj[key]) {
        return;
      }
    }
    return 'Por favor marque uma disponibilidade';
  }

  function validatePrice({value, sell}) {
    if (sell && !value) {
      return 'Informe o preço ou desmarque venda';
    }
  }

  return useObserver(() => (
    <FooterNavigationLayout selected="Publish" style={styles.screen}>
      <CustomHeader
        title="Publicar"
        right={<NextButton text="Enviar" onPress={handleSubmit(onSubmit)} />}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Controller
          name="images"
          control={control}
          defaultValue={{}}
          render={({field: {onChange, onBlur, value}}) => (
            <SelectImagesField
              label="Fotos"
              value={value}
              onBlur={onBlur}
              control={control}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="name"
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Por favor, nome com pelo menos 3 letras',
            },
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
              onChangeText={onChange}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue={{}}
          name="availabilities"
          rules={{
            validate: validateAvailabilities,
          }}
          render={({field: {onChange, onBlur, value: availabillitesValue}}) => (
            <>
              <TagsSelector
                onBlur={onBlur}
                showIcon={false}
                onChange={onChange}
                label="Disponível para"
                options={availabilities}
                value={availabillitesValue}
                buttonStyle={styles.button}
                labels={availabilitiesLabels}
                error={errors.availabilities?.message}
              />
              {availabillitesValue?.sell && (
                <Controller
                  name="price"
                  defaultValue=""
                  control={control}
                  rules={{
                    validate: price =>
                      validatePrice({
                        value: price,
                        sell: availabillitesValue.sell,
                      }),
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <PriceInput
                      label="Preço"
                      value={value}
                      maxLength={4}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      error={errors.price?.message}
                    />
                  )}
                />
              )}
            </>
          )}
        />
        <Controller
          name="tags"
          control={control}
          defaultValue={{}}
          render={({field: {onChange, onBlur, value}}) => (
            <TagsSelector
              value={value}
              options={tags}
              onBlur={onBlur}
              label="Marcar como"
              onChange={onChange}
            />
          )}
        />
        <Controller
          defaultValue=""
          control={control}
          name="description"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              optional
              multiline
              value={value}
              maxLength={512}
              onBlur={onBlur}
              label="Descrição"
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          name="amount"
          defaultValue=""
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <IntInput
              optional
              value={value}
              maxLength={4}
              onBlur={onBlur}
              label="Quantidade"
              onChangeText={onChange}
            />
          )}
        />
        <EmphasisButton text="Enviar" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </FooterNavigationLayout>
  ));
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 40,
    paddingTop: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: 'center',
  },
});

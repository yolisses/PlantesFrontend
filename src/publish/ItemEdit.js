import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useObserver} from 'mobx-react-lite';

import {NextButton} from './NextButton';
import {CustomHeader} from './CustomHeader';
import {SelectImagesField} from './SelectImagesField';

import {tags} from './data/tags';
import {availabilities, availabilitiesLabels} from './data/availiabilities';

import {IntInput} from 'form/IntInput';
import {TextInput} from 'form/TextInput';
import {PriceInput} from 'form/PriceInput';
import {TagsSelector} from 'form/TagsSelector';
import {EmphasisButton} from 'common/EmphasisButton';
import {hasSomeTrueValuedKey} from 'common/hasSomeTrueValuedKey';

export function ItemEdit({item, errors, control, onSubmit, handleSubmit}) {
  function validateAvailabilities(obj) {
    if (!hasSomeTrueValuedKey(obj)) {
      return 'Por favor marque pelo menos uma disponibilidade';
    }
  }

  function validateImages(obj) {
    if (!hasSomeTrueValuedKey(obj)) {
      return 'Por favor selecione pelo menos uma foto';
    }
  }

  function validatePrice({value, sell}) {
    if (sell && !value) {
      return 'Informe o preço ou desmarque venda';
    }
  }

  return useObserver(() => (
    <>
      <Controller
        name="images"
        control={control}
        defaultValue={item?.images || {}}
        rules={{validate: validateImages}}
        render={({field: {onChange, onBlur, value}}) => (
          <SelectImagesField
            label="Fotos"
            error={errors.images?.message}
            value={value}
            control={control}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name="name"
        control={control}
        defaultValue={item?.name || ''}
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
        name="availabilities"
        defaultValue={item?.availabilities || {}}
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
                defaultValue={item?.price || ''}
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
        control={control}
        name="description"
        defaultValue={item?.description || ''}
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
        defaultValue={item?.amount || ''}
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
    </>
  ));
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: 'center',
  },
});

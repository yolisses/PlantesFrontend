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
    console.error('foi', coisa);
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
    <FooterNavigationLayout selected="Publish">
      <CustomHeader
        title="Publicar"
        right={<FinishButton onPress={handleSubmit(onSubmit)} />}
      />
      <ScrollView style={styles.container}>
        {/* <SelectImagesField /> */}
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
              {availabillitesValue.sell && (
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

import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {useObserver} from 'mobx-react-lite';
import {pushSending} from 'send/sendings';
import {ItemEdit} from './ItemEdit';
import {useForm} from 'react-hook-form';
import {ScrollView, StyleSheet, View} from 'react-native';
import {NextButton} from './NextButton';
import {CustomHeader} from './CustomHeader';
import {formatToEdit} from './formatToEdit';
import {BackButton} from './BackButton';
import {useAlert} from 'alert/AlertContext';
import {EditBackAlert} from './EditBackAlert';

export function EditScreen({route}) {
  const {navigate} = useNavigation();
  const {showAlert} = useAlert();

  const {item} = route.params;

  const {
    reset,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  function onSubmit(item) {
    pushSending(item);
    navigate('Home');
    reset();
  }

  function onBackPress() {
    showAlert(<EditBackAlert />);
  }

  return useObserver(() => (
    <View style={styles.screen}>
      <CustomHeader
        left={<BackButton onPress={onBackPress} />}
        title="Editar"
        right={<NextButton text="Enviar" onPress={handleSubmit(onSubmit)} />}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.scroll}>
        <ItemEdit
          reset={reset}
          errors={errors}
          control={control}
          onSubmit={onSubmit}
          item={formatToEdit(item)}
          handleSubmit={handleSubmit}
        />
      </ScrollView>
    </View>
  ));
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scroll: {
    // flex: 1
    height: '100%',
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 40,
  },
});

import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {useObserver} from 'mobx-react-lite';
import {pushSending} from 'send/sendings';
import {ItemEdit} from './ItemEdit';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomHeader} from './CustomHeader';
import {NextButton} from './NextButton';
import {useForm} from 'react-hook-form';
import {DiscardButton} from './DiscardButton';

export function PublishScreen() {
  const {navigate} = useNavigation();

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

  return useObserver(() => (
    <View style={styles.screen}>
      <CustomHeader
        left={<DiscardButton reset={reset} />}
        title="Publicar"
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

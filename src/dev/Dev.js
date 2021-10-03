import React, {useRef} from 'react';
import {Formik} from 'formik';
import {Button, StyleSheet, ScrollView} from 'react-native';
import * as Yup from 'yup';
import {TextInput} from 'form/TextInput';

export function Dev() {
  const user = useRef(null);
  const password = useRef(null);

  const FormSchema = Yup.object().shape({
    user: Yup.string().required('Campo obrigatório'),
    password: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Digite pelo menos 8 caracteres'),
  });

  return (
    <Formik
      initialValues={{
        user: '',
        password: '',
      }}
      onSubmit={values => {
        console.error(values);
      }}
      validationSchema={FormSchema}>
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        setFieldTouched,
      }) => (
        <ScrollView style={styles.container}>
          <TextInput
            ref={user}
            label={'Usuário'}
            value={values.user}
            onChangeText={handleChange('user')}
            error={touched.user && errors.user}
            onBlur={() => setFieldTouched('user', true)}
          />
          <TextInput
            ref={password}
            label={'Senha'}
            value={values.password}
            onChangeText={handleChange('password')}
            error={touched.password && errors.password}
            onBlur={() => setFieldTouched('password', true)}
          />
          <Button title="Entrar" onPress={handleSubmit} />
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

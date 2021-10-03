import React, {useRef} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

const Checkbox = ({children, value, onValueChange}) => {
  function onPress(e) {
    onValueChange(!value);
  }

  return (
    <View>
      <View>
        <TouchableOpacity onPress={onPress}>
          {/* <CheckBox
          type={'checkbox'}
          value={value}
          onValueChange={handleChange}
          checked={value}
        /> */}
          {value ? <Text>sim</Text> : <Text>não</Text>}
          <Text>{children}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkbox;

export function Dev() {
  const valor = useRef();
  return (
    <Formik
      initialValues={{
        valor: true,
      }}
      onSubmit={(values, {resetForm}) => {
        console.error(values);
      }}>
      {({handleChange, handleSubmit, values, setFieldValue}) => (
        <View>
          <Checkbox
            ref={valor}
            value={values?.valor}
            onValueChange={value => setFieldValue('valor', value)}>
            Financially Responsible
          </Checkbox>
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}

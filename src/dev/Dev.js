import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export function Input({
  id,
  errorObj,
  validate,
  value: customValue,
  forceValidation,
  ...rest
}) {
  const [value, setValue] = useState();
  const [error, setError] = useState();
  const [showError, setShowError] = useState(false);
  const ref = useRef();

  useEffect(() => {
    runValidation(value);
  }, []);

  useEffect(() => {
    setShowError(true);
  }, [forceValidation]);

  function onBlur(e) {
    Keyboard.dismiss();
    setShowError(true);
  }

  function onPress(e) {
    ref?.current?.focus();
  }

  function runValidation(value) {
    if (validate) {
      const error = validate(value);
      setError(error);
      errorObj[id] = error;
    }
  }

  function onChangeText(text) {
    setValue(text);
    setShowError(false);
    runValidation(text);
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <TextInput
          ref={ref}
          {...rest}
          value={value}
          onBlur={onBlur}
          onChangeText={onChangeText}
        />
      </TouchableOpacity>

      {!!error && showError && <Text>{error}</Text>}
    </View>
  );
}

export function Dev() {
  const errorObj = {};

  const [lastResult, setLastResult] = useState();
  const [forceValidation, setCheckValidation] = useState();
  const [canContinue, setCanContinue] = useState();

  const validateText = text => {
    if (!text) {
      return 'por favor informe o nome';
    }
    if (text.length < 3) {
      return 'precisa ter pelo menos tres letras';
    }
  };

  function checkItsValid() {
    setCheckValidation(Math.random());
    setLastResult(errorObj);
    for (let key in errorObj) {
      if (errorObj[key]) {
        setCanContinue(false);
        return;
      }
    }
    setCanContinue(true);
  }

  return (
    <ScrollView>
      <Input
        label="escreva plz"
        errorObj={errorObj}
        id="oi"
        forceValidation={forceValidation}
        style={styles.input}
        validate={validateText}
      />
      <Button title="verifica se pode pa" onPress={checkItsValid} />
      <Text>{JSON.stringify(lastResult)}</Text>
      <Text>{JSON.stringify(canContinue)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
  },
});

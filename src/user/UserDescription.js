import {ReadMoreText} from 'common/ReadMoreText';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function UserDescription({text}) {
  return useMemo(
    () => (
      <View style={styles.container}>
        {text ? (
          <ReadMoreText
            text={text}
            textStyle={styles.text}
            readMoreStyle={styles.showMore}
          />
        ) : (
          <Text style={styles.notProvided}>Usuário sem descrição</Text>
        )}
      </View>
    ),
    [text],
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
  },
  text: {
    fontSize: 17,
  },
  notProvided: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
  showMore: {
    color: '#666',
    fontSize: 17,
  },
});

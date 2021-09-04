import React, {Fragment} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useAlert} from 'alert/AlertContext';
import {AlertOverlay} from './AlertOverlay';

export function Alert({title, description, children}) {
  const {alertActive} = useAlert();

  if (!alertActive) {
    return null;
  }
  return (
    <AlertOverlay>
      <View style={styles.container}>
        <Pressable>
          <View style={styles.paddingContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.horizontalWrapper}>
            {children &&
              children.map((child, index) => {
                return (
                  <Fragment key={index}>
                    {child}
                    {index + 1 < children.length && (
                      <View style={styles.verticalLine} />
                    )}
                  </Fragment>
                );
              })}
          </View>
        </Pressable>
      </View>
    </AlertOverlay>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  horizontalWrapper: {
    flexDirection: 'row',
  },
  paddingContainer: {
    padding: 20,
    paddingBottom: 0,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  verticalLine: {
    paddingStart: 1,
    backgroundColor: '#ddd',
  },
});

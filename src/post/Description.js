import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MAX_LINES = 3;

export function Description({
  text,
  numberOfLines,
  setNumberOfLines,
  showMoreButton,
  setShowMoreButton,
  showText,
}) {
  const onTextLayout = useCallback(
    e => {
      if (e.nativeEvent.lines.length > MAX_LINES && !showText) {
        setShowMoreButton(true);
        setNumberOfLines(MAX_LINES);
      }
    },
    [showText],
  );

  useEffect(() => {
    if (showMoreButton) {
      setNumberOfLines(showText ? undefined : MAX_LINES);
    }
  }, [showText, showMoreButton]);

  return (
    <View style={styles.container}>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={numberOfLines}
        style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
});

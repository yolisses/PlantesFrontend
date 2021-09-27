import React from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

function generateData() {
  return [...Array(100)].map(Math.random);
}

const data = generateData();

function renderItem({item, index}) {
  return <Text style={styles.listItem}>{index}</Text>;
}

const translateY = new Animated.Value(0);

const duration = 150;
const headerHeight = 60;

//prevent short distances oscilations
const threshold = 100;

// must be outside the component or will be overwrited
const initial = {value: 0, animating: false};

const App = () => {
  return (
    <>
      <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
        <Text style={styles.headerTitle}>Header</Text>
      </Animated.View>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{paddingTop: headerHeight}}
        onScroll={e => {
          if (initial.animating) {
            return;
          }
          const currentScroll = e.nativeEvent.contentOffset.y;
          const updateInitial = () => {
            initial.value = currentScroll;
            initial.animating = false;
          };
          if (currentScroll - initial.value > threshold) {
            initial.animating = true;
            Animated.timing(translateY, {
              duration,
              toValue: -headerHeight,
              useNativeDriver: true,
            }).start(updateInitial);
          } else if (currentScroll - initial.value < -threshold) {
            initial.animating = true;
            Animated.timing(translateY, {
              duration,
              toValue: 0,
              useNativeDriver: true,
            }).start(updateInitial);
          }
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    // keep this part to show over the other components
    zIndex: 10,
    elevation: 3,
    position: 'absolute',

    fontSize: 20,
    width: '100%',
    height: headerHeight,
    backgroundColor: '#33a',
    justifyContent: 'center',
  },
  headerTitle: {
    margin: 10,
    fontSize: 25,
    color: 'white',
  },
  listItem: {
    margin: 10,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default App;

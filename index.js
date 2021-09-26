import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

const HomeScreen = props => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Push Settings Screen"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
            },
          })
        }
      />
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>

      <Button title="click me" onPress={() => Navigation.setRoot('Mangote')} />
    </View>
  );
};

const MangoteScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>{counter}</Text>
      <Text>Settings Screen</Text>

      <Button title="click me" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Mangote', () => MangoteScreen);

Navigation.setDefaultOptions({});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings',
                  },
                },
              ],
            },
          },
        ],
        v,
      },
    },
  });
});

Navigation.mergeOptions(componentId, {
  bottomTabs: {
    visible: false,
  },
});

/**
 * @format
 */

// Import the polyfill before anything else (import order matters!):
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './src/App.tsx';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';

SplashScreen.hide();

AppRegistry.registerComponent(appName, () => App);

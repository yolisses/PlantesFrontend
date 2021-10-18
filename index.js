/**
 * @format
 */

// Import the polyfill before anything else (import order matters!):
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './src/App.tsx';
import {name as appName} from './app.json';

import {trySavedLogin} from 'auth/trySavedLogin';
import {configureGoogleSignIn} from './src/auth/configureGoogleSignIn';

configureGoogleSignIn();
trySavedLogin(); // after this ^^
AppRegistry.registerComponent(appName, () => App);

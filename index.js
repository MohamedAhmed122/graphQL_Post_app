/**
 * @format
 */

import {AppRegistry} from 'react-native';

import ApolloProvider from './ApolloProvider';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ApolloProvider);

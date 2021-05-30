import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './ApolloProvider';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';
export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({});

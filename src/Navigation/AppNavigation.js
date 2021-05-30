import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PostsScreen from '../screens/PostsScreen';
import PostScreen from '../screens/LoginScreen';
import {primary} from '../config/colors';

const Stack = createStackNavigator();
export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: primary}}>
      <Stack.Screen
        component={PostsScreen}
        name="Posts"
        options={{headerShown: false}}
      />
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={RegisterScreen} name="Register" />
      <Stack.Screen component={PostScreen} name="Post Detail" />
    </Stack.Navigator>
  );
}

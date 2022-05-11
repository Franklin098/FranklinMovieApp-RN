import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'DetailScreen'
>;

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}

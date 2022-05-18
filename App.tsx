import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({children}: AppStateProps) => {
  return <GradientProvider>{children}</GradientProvider>;
};

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
}

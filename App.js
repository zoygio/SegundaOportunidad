import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CalculatorScreen from './screens/CalculatorScreen';
import AboutScreen from './screens/AboutScreen';
import PreferencesScreen from './screens/PreferencesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sobre la App" component={AboutScreen} />
        <Tab.Screen name="Parte de Calculadora" component={CalculatorScreen} />
        <Tab.Screen name="Preferencias" component={PreferencesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

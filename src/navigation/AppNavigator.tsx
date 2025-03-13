import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const isAuth = true;
  return (
    <NavigationContainer>
      {isAuth ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

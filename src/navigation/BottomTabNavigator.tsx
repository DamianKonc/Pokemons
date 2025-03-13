import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Travel from '../screens/Travel/Travel';
import Pokedex from '../screens/Pokedex/Pokedex';
import PokeCenter from '../screens/PokeCenter/PokeCenter';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Travel" component={Travel} />
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="PokeCenter" component={PokeCenter} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import SignupScreen from '../screens/Signup';
import SigninScreen from '../screens/Signin';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={'Home'} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName={'Signin'}>
      <AuthStack.Screen name={'Signin'} component={SigninScreen} />
      <AuthStack.Screen name={'Signup'} component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='Akun' component={AuthStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
